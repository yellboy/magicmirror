import subprocess;

subprocess.call('python -m SimpleHTTPServer 8889');

subprocess.call('chromium-browser -kiosk http://localhost:8889/web-app');
