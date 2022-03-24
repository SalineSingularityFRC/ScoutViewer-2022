@echo off

set /p password=< password.txt

if exist json (
   pscp -P 22 -pw %password% json/* root@155.138.211.124:/pub/ScoutViewerTester/public/json
   echo y|rmdir /s json
)

putty.exe -ssh root@155.138.211.124:/pub/ScoutViewerTester -pw %password% -m sshCommand.txt

exit