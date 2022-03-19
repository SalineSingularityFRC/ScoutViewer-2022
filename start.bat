@echo off

set browser=chrome
::set this to the name of the prefered browser exe

set running=true

start /min "Usb Copier" CopyFromUsb.bat
start /min node %CD%\ScoutViewer-2022-main\index.js
start %browser% localhost

echo press enter to end the scouting data viewer
pause > nul

taskkill /f /im node.exe
taskkill /im cmd.exe

