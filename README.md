# Cartridge lib xlsx

[![Version](https://img.shields.io/npm/v/cartridge_lib_xlsx.svg)](https://npmjs.org/package/cartridge_lib_xlsx)
[![Build Status](https://travis-ci.com/pikamachu/pika-cartridge-lib-xlsx.svg?branch=master)](https://travis-ci.com/pikamachu/pika-cartridge-lib-xlsx)
[![codecov](https://codecov.io/gh/pikamachu/pika-cartridge-lib-xlsx/branch/master/graph/badge.svg)](https://codecov.io/gh/pikamachu/pika-cartridge-lib-xlsx)

## Introduction

Cartridge library from [xlsx mini](https://www.npmjs.com/package/xlsx) npm node module version 0.16.5

## Build with

* [xlsx](https://www.npmjs.com/package/xlsx)
* [Generator Cartridge Lib Module](https://www.npmjs.com/package/generator-cartridge-lib-module)

## Cartridge dependencies

* [cartridge_lib_fs](https://npmjs.org/package/cartridge_lib_fs)

## Installation

### As standard SFCC cartridge

This library can be installed as a standard SFRA cartridge cloning the repository and running npm script uploadCartridge

````
$ git clone git@github.com:pikamachu/pika-cartridge-lib-xlsx.git
$ cd pika-cartridge-lib-xlsx
$ npm run uploadCartridge
````

### As npm library dependency on SFRA project

This library can be added to an existing SFRA project as npm library dependency using

````
$ npm i cartridge_lib_xlsx
````

This option is recommended for develop environments using [vscode](https://code.visualstudio.com/) + [Prophet Debugger](https://marketplace.visualstudio.com/items?itemName=SqrTT.prophet)

The Prophet Debugger Extension should be set with this configuration on user settings.json
````
"extension.prophet.upload.enabled": true,
"extension.prophet.ignore.list": ["\\.git", "\\.zip$"],
````

## Usage

This cartridge library is a babel transpilation to ES5 with some minor changes in order to be usable as a standard SFRA cartridge.

This library needs the [cartridge_lib_fs](https://npmjs.org/package/cartridge_lib_fs) dependency in order to read and write files.

The xlsx module can be loaded using require cartridge as a standard SFRA script.

````
var xlsx = require('*/cartridge/scripts/lib/xlsx/index');
````

See [xlsx](https://www.npmjs.com/package/xlsx) documentation for module usage.
