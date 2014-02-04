d0 = [];
d1 = [];
d2 = [];
d3 = [];
d4 = [];
d5 = [];
MAX_OCL = 200;
var data = new Array();
ws = new WebSocket("ws://"+window.location.host + "/websocket");
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
	var n;
	n = 0
	data = new Array();
	if (document.chk.pin[0].checked){
		data[n] = {
			data: d0,
			label: 'A0'
		};
		n=n+1;
	}
	if (document.chk.pin[1].checked){
		data[n] = {
			data: d1,
			label: 'A1'
		};
		n=n+1;
	}
	if (document.chk.pin[2].checked){
		data[n] = {
			data: d2,
			label: 'A2'
		};
		n=n+1;
	}
	if (document.chk.pin[3].checked){
		data[n] = {
			data: d3,
			label: 'A3'
		};
		n=n+1;
	}
	if (document.chk.pin[4].checked){
		data[n] = {
			data: d4,
			label: 'A4'
		};
		n=n+1;
	}
	if (document.chk.pin[5].checked){
		data[n] = {
			data: d5,
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


