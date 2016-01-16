/**
 * Created by Lezwon on 15-01-2016.
 */

var path = require('path');
module.exports = {
    entry: './js/script.js',
    output: {
        path: __dirname,
        filename: './js/final.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};