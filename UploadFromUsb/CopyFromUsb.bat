@echo off

set copyTo=%CD%\Usb
::change to the path you want to copy to
set usbPath=D:
::change usbPath to usb disk name ex: D:
set last=start

:start
if not exist %copyTo% (
   echo usb directory doesn't exist, creating...
   mkdir %copyTo%
   echo done!
)
goto check

:copy
set choice =
echo d|xcopy /e /y %usbPath% %copyTo%
start ExtractJSON.bat
timeout /t 3
goto wait

:wait
if not %last% == wait echo waiting for removal
set last=wait
if exist %usbPath% (
   goto wait
) else (
   goto removed
)

:removed
echo usb removed
goto check

:check
if not %last% == check echo waiting for usb
set last=check
if exist %usbPath% (
   goto copy
) else (
   goto check
)