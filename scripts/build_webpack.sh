#!/usr/bin/env bash

echo 'Running `webpack --config webpack.prod.config.js` ...'
cd ./client
./node_modules/.bin/webpack --config webpack.prod.config.js
