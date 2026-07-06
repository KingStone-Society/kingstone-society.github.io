@echo off
chcp 65001 >nul
title 金石篆刻社官网 - 生产预览服务器

echo ============================================
echo    金石篆刻社官网 - 一键启动（生产模式）
echo ============================================
echo.

cd /d "%~dp0"

if not exist "node_modules" (
    echo 检测到依赖未安装，正在安装...
    echo.
    npm install
    if %errorlevel% neq 0 (
        echo.
        echo 依赖安装失败，请检查网络连接或手动运行 npm install
        pause
        exit /b 1
    )
    echo.
    echo 依赖安装成功！
    echo.
)

echo 正在构建生产版本...
echo.
npm run build
if %errorlevel% neq 0 (
    echo.
    echo 构建失败，请检查代码错误
    pause
    exit /b 1
)
echo.
echo 构建成功！
echo.
echo 正在启动预览服务器...
echo.
echo 如果浏览器没有自动打开，请手动访问：http://localhost:4173
echo.
echo 按 Ctrl+C 可以停止服务器
echo ============================================
echo.

start /b npm run preview
timeout /t 3 /nobreak >nul
start http://localhost:4173

pause
