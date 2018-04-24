const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath:'/dist/',
        filename: 'js/app.js'
    },
    resolve:{
      alias:{
        /*page: path.resolve(__dirname,'src/page'),*/
        component: path.resolve(__dirname,'src/component')
      }
    },
    module: {
        rules: [
        	{
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
          },
            //CSS文件的处理
          {
              test: /\.css$/,
 				      use: ExtractTextPlugin.extract({
          		fallback: "style-loader",
          		use: "css-loader"
        		  })
          },
            //Sass文件的处理
          {
        		test: /\.scss$/,
        		use: ExtractTextPlugin.extract({
          			fallback: 'style-loader',
          			//如果需要，可以在 sass-loader 之前将 resolve-url-loader 链接进来
          			use: ['css-loader', 'sass-loader']
        		})
      		}
        ]
    },
    plugins: [
    	//处理HTML文件
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        //独立css文件
        new ExtractTextPlugin("css/[name].css")/*,
        //提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
        	name:'common',
        	filename:'js/base.js'
        })*/
    ],
   devServer: {
     port:8089
   }
};