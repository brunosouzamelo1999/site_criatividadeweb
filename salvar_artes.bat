@echo off
set "SOURCE=C:\Users\bruno\.gemini\antigravity\brain\ec37f099-ef98-4c76-b423-7387538a36b0"
set "DEST=c:\Users\bruno\Downloads\Site Retro Pixel\Artes_Instagram"

echo Copiando artes para %DEST%...

if not exist "%DEST%" mkdir "%DEST%"

copy "%SOURCE%\bg_story1_png_1777901346762.png" "%DEST%\fundo_neon_1.png"
copy "%SOURCE%\bg_story2_png_1777901361042.png" "%DEST%\fundo_neon_2.png"
copy "%SOURCE%\bg_story3_png_1777901374823.png" "%DEST%\fundo_neon_3.png"
copy "c:\Users\bruno\Downloads\Site Retro Pixel\assets\story_template_base.svg" "%DEST%\"
copy "c:\Users\bruno\Downloads\Site Retro Pixel\assets\story_template_tech.svg" "%DEST%\"
copy "c:\Users\bruno\Downloads\Site Retro Pixel\assets\story_template_minimal.svg" "%DEST%\"
copy "c:\Users\bruno\Downloads\Site Retro Pixel\assets\stories_sequence\*.svg" "%DEST%\"
copy "c:\Users\bruno\Downloads\Site Retro Pixel\assets\stories_sequence_minimal\*.svg" "%DEST%\"
copy "c:\Users\bruno\Downloads\Site Retro Pixel\assets\stories_ecommerce_tech\*.svg" "%DEST%\"
copy "c:\Users\bruno\Downloads\Site Retro Pixel\assets\stories_advanced_gamer\*.svg" "%DEST%\"
copy "c:\Users\bruno\Downloads\Site Retro Pixel\assets\stories_process_tech\*.svg" "%DEST%\"

echo Pronto! Suas artes estao em %DEST%
pause
