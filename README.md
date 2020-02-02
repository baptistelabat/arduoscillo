arduoscillo
===========

arduoscillo enables real time plotting of arduino analog pin signals in the browser (tornado server + websocket + flotr2)

## Installing python-serial

Ubuntu  
sudo apt-get python-serial

Windows (avec conda)
conda install -c anaconda pyserial

## Installing tornado webserver
http://www.tornadoweb.org/en/stable/#installation

Mac OS X  
Open a terminal and type:  
sudo curl https://bitbucket.org/pypa/setuptools/raw/bootstrap/ez_setup.py -k | sudo python  
sudo easy_install tornado   

Ubuntu  
sudo apt-get install python-tornado

Windows (avec conda)
conda install tornado

## Uploading sketch to arduino

-Using arduino graphical user interface:  
 Open arduoscillo/arduino/src/sketch.ino, build and upload it  
 
-Using ino command line tool:  
 Go to arduoscillo/arduino and type:  
 ino build  
 ino upload

## Launching the server
You are now ready to launch the software.  
Go to arduoscillo folder and type:  
python server.py

## Enjoying live data
Open a web browser and go to localhost:8080  
You should see the graph window and be able to select the curves to display.

