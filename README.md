# demo-minigame

[![Greenkeeper badge](https://badges.greenkeeper.io/vietdien2005/demo-minigame.svg)](https://greenkeeper.io/)

## About
demo-minigame is demo basic game about choose title of question and answer, build with electron.atom.io js 

## Supported Platforms

It generates executables/bundles for the following **target** platforms:

* Windows (also known as `win32`, for both 32/64 bit)
* OS X (also known as `darwin`) / (also known as `mas`)<sup>*</sup>
* Linux (for both x86/x86_64)

## Installation & Usage

This module requires Node.js 4.0 or higher to run.

```sh
# Git clone 
git clone https://github.com/vietdien2005/demo-minigame.git

# install node_modules
cd demo-minigame
npm install & npm start

```

If you want run it with electron 

```sh
# install electron to run
npm install electron-prebuilt -g

# Run
electron .

```

## Build

```sh
# install electron-packager for build app
npm install electron-packager -g

# Build MacOS 
electron-packager /Users/retina13/Documents/www/countdownjs/src MobileDay2016 --platform=darwin --arch=x64 --version=1.2.1 --overwrite --out=/Users/retina13/Documents/www/countdownjs --icon=src/images/mobileday-icon.icns

# Build Win32x-64
electron-packager /Users/retina13/Documents/www/countdownjs/src MobileDay2016 --platform=win32 --arch=x64 --version=1.2.1 --overwrite --out=/Users/retina13/Documents/www/countdownjs 

# Build Mac App
electron-packager /Users/retina13/Documents/www/countdownjs/src MobileDay2016 --platform=mas --arch=x64 --version=1.2.1 --overwrite --out=/Users/retina13/Documents/www/countdownjs --icon=src/images/mobileday-icon.icns
 
# Build Linux
electron-packager /Users/retina13/Documents/www/countdownjs/src MobileDay2016 --platform=linux --arch=x64 --version=1.2.1 --overwrite --out=/Users/retina13/Documents/www/countdownjs --icon=src/images/mobileday-icon.icns

# Build All platforms
electron-packager /Users/retina13/Documents/www/countdownjs/src MobileDay2016 --platform=all --arch=x64 --version=1.2.1 --overwrite --out=/Users/retina13/Documents/www/countdownjs --icon=images/mobileday-icon.icns

```
