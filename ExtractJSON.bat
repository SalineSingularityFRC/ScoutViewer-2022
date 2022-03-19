@echo off

set JSONCopyTo=%CD%\tmp
set final=%CD%\ScoutViewer-2022-main\public\json
::change to the path you want to copy to
set dir=%CD%\Usb

:start
if not exist %final% (
   echo usb directory doesn't exist, creating...
   mkdir %final%
   echo done!
for /f %%A in ('dir ^| find "File(s)"') do set cnt=%%A
)

goto copy

mkdir %JSONCopyTo%

:copy
setlocal enabledelayedexpansion
pushd %dir%
(
  for /r %%a in (*.json) do (
    echo d | xcopy %%a %JSONCopyTo% /y
    set x=%%a
    echo !x:%cd%=!
  )
)
popd
del %JSONCopyTo%\teamData.json
del %JSONCopyTo%\matchData.json
xcopy /s /y %JSONCopyTo% %final%
rmdir /s /q %JSONCopyTo%

exit