@echo off
setlocal enabledelayedexpansion

set "BASE_DIR=%~dp0"
set "ARTES_OUT=%BASE_DIR%Artes_Instagram"
set "ASSETS_DIR=%BASE_DIR%assets"
set "EDGE_PATH=C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

if not exist "%ARTES_OUT%" mkdir "%ARTES_OUT%"

echo ====================================================
echo    CRIATIVIDADE WEB - CONVERSOR DE ARTES ELITE
echo ====================================================
echo.

:: 1. Converte os Stories da pasta Artes_Instagram (Easter Eggs)
echo [1/2] Processando Stories de Easter Eggs...
for %%f in ("%ARTES_OUT%\*.svg") do (
    echo Convertendo: %%~nxf
    "%EDGE_PATH%" --headless --screenshot="%ARTES_OUT%\%%~nf.png" --window-size=1080,1920 --hide-scrollbars --default-background-color=000000 "%%~ff"
)

:: 2. Procura e converte todos os outros Stories dentro da pasta assets
echo.
echo [2/2] Procurando sequencias em /assets...
for /r "%ASSETS_DIR%" %%f in (*.svg) do (
    :: Ignora templates base
    echo %%~nxf | findstr /i "template" >nul
    if errorlevel 1 (
        echo Convertendo: %%~nxf
        "%EDGE_PATH%" --headless --screenshot="%ARTES_OUT%\%%~nf.png" --window-size=1080,1920 --hide-scrollbars --default-background-color=000000 "%%~ff"
    )
)

echo.
echo ====================================================
echo CONCLUIDO! Todas as artes estao em:
echo %ARTES_OUT%
echo ====================================================
pause
