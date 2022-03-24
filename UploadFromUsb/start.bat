@echo off

start /min "Usb Copier" CopyFromUsb.bat

echo press enter to end the scouting file uploader
pause > nul

taskkill /im cmd.exe

