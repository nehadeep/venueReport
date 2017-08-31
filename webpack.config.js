
//var path = require('path');
var path = require('path') //use of  webpack 2
var webpack = require('webpack');

var config = {
    entry : {
        main : './javscript/src/main.js'

    },
    output : {
        filename : '[name].bundle.js',
        // path : __dirname + '/dist'
        path: path.resolve(__dirname, 'javscript/dist')
    },
    module : {
        rules : [
            {
                test: /\.js$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve : {
        extensions : ['.tsx','.ts','.js',',json']
    }
};
module.exports = config;