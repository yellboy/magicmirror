#!/bin/bash
cd /
cd home/pi/magicmirror/calendar-service
nohup node app.js  & 
cd /

cd home/pi/magicmirror/proximity-service
nohup node proximity.js &
cd /

cd home/pi/magicmirror/temperature-service
nohup python webapi.py &
cd /

cd home/pi/magicmirror
nohup python -m SimpleHTTPServer 8889 &
cd /

cd home/pi/magicmirror
chromium-browser -kiosk http://localhost:8889/web-app


