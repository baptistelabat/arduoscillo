d0 = [];
d1 = [];
d2 = [];
d3 = [];
d4 = [];
d5 = [];
d0s = [];
d1s = [];
d2s = [];
d3s = [];
d4s = [];
d5s = [];
d0p = [];
d1p = [];
d2p = [];
d3p = [];
d4p = [];
d5p = [];
MAX_OCL = 6000;
var data = new Array();
ws = new WebSocket("ws://" + window.location.host + "/websocket");
ws.onmessage = function(evt) {
	var msg = evt.data;
	console.log(msg);
	obj = JSON.parse(msg);
	d0.push([obj.x, obj.d0/1024]);
	d1.push([obj.x, obj.d1/1024]);
	d2.push([obj.x, obj.d2/1024]);
	d3.push([obj.x, obj.d3/1024]);
	d4.push([obj.x, obj.d4/1024]);
	d5.push([obj.x, obj.d5/1024]);
	if(d0.length > MAX_OCL){
		d0.shift();
	}
	if(d1.length > MAX_OCL){
		d1.shift();
	}
	if(d2.length > MAX_OCL){
		d2.shift();
	}
	if(d3.length > MAX_OCL){
		d3.shift();
	}
	if(d4.length > MAX_OCL){
		d4.shift();
	}
	if(d5.length > MAX_OCL){
		d5.shift();
	}
	if (!(document.option.pause.checked)){
		d0s = d0.slice(0);
		d1s = d1.slice(0);
		d2s = d2.slice(0);
		d3s = d3.slice(0);
		d4s = d4.slice(0);
		d5s = d5.slice(0);
		d0p = d0;
		d1p = d1;
		d2p = d2;
		d3p = d3;
		d4p = d4;
		d5p = d5;
	}
	else
	{
		d0p = d0s;
		d1p = d1s;
		d2p = d2s;
		d3p = d3s;
		d4p = d4s;
		d5p = d5s;
	}
	var maxstep = 10;
	var timelength = document.getElementById("ZoomRange").value;
	var l = d0p.length-d0p.length*timelength/maxstep;
	d0p = slice(d0p, l, null, timelength);
	d1p = slice(d0p, l, null, timelength);
	d2p = slice(d0p, l, null, timelength);
	d3p = slice(d0p, l, null, timelength);
	d4p = slice(d0p, l, null, timelength);
	d5p = slice(d0p, l, null, timelength);
	var n;
	n = 0
	data = new Array();
	if (document.chk.pin[0].checked){
		data[n] = {
			data: d0p,
			label: 'A0'
		};
		n=n+1;
	}
	if (document.chk.pin[1].checked){
		data[n] = {
			data: d1p,
			label: 'A1'
		};
		n=n+1;
	}
	if (document.chk.pin[2].checked){
		data[n] = {
			data: d2p,
			label: 'A2'
		};
		n=n+1;
	}
	if (document.chk.pin[3].checked){
		data[n] = {
			data: d3p,
			label: 'A3'
		};
		n=n+1;
	}
	if (document.chk.pin[4].checked){
		data[n] = {
			data: d4p,
			label: 'A4'
		};
		n=n+1;
	}
	if (document.chk.pin[5].checked){
		data[n] = {
			data: d5p,
			label: 'A5'
		};
		n=n+1;
	}
}



	// Draw Graph
function drawGraph(){
		var graph;
		var container = document.getElementById("graphDiv");
		graph = Flotr.draw(container, data, {
			xaxis: {
				minorTickFreq: 4
			}, 
			yaxis: {
				max: 1,
				min: 0
			},
			grid: {
				minorVerticalLines: true
			}
		});

		// Reload
		setTimeout(function(){
			drawGraph();
		}, 100);
}

function slice(array, from, to, step) {
	if (from===null) from=0;
	if (to===null) to=array.length;
	if (!step) return array.slice(from, to);
	var result = Array.prototype.slice.call(array, from, to);
	if (step < 0) result.reverse();
	step = Math.abs(step);
	if (step > 1) {
		var final = [];
		for (var i = result.length - 1; i >= 0; i--) {
		(i % step === 0) && final.push(result[i]);
		};
		final.reverse();
		result = final;
	}
	return result;
}

function updateZoomRange(){
//get elements
var myRange = document.getElementById("ZoomRange");
var myNumber = document.getElementById("ZoomNumber");
//copy the value over
myNumber.value = myRange.value;
} // end function

function updateZoomNumber(){
//get elements
var myRange = document.getElementById("ZoomRange");
var myNumber = document.getElementById("ZoomNumber");
//copy the value over
myRange.value = myNumber.value;
} // end function


