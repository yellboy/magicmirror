import subprocess;

subprocess.call('C:\Program Files (x86)\Google\Chrome\Application\chrome.exe -kiosk --disable-web-security --user-data-dir http://localhost:8889');

subprocess.call('python -m http.server 8889');