const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Ex = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
	  app: './src/js/index.js'
  },
  output: {
    filename: 'js/[name].bundle.js',
	publicPath: '/dist',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
		// 处理css
       {
         test: /\.css$/,
         use: Ex.extract([ 'css-loader', 'postcss-loader'])
       },
	   //处理图片
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
			{
				loader: 'file-loader',
				options:{
				   name: '/img/[hash].[ext]'
			   }
			}
         ]
       },
	   //处理字体文件
       {
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [{
           loader: 'file-loader',
		   options:{
			   name: 'font/[hash].[ext]'
		   }
         }]
       },
	   {
		  test: /\.(html)$/,
		  use: {
			loader: 'html-loader'
		  }
		}
     ]
   },
  devtool: 'inline-source-map',   //定位错误所在源文件地址
  devServer: {
     contentBase: './dist',   //开启本地服务器，并定位到dist文件夹
	 hot: true
   },
  plugins: [
	 new CleanWebpackPlugin(
			['dist/*'],　
            {
                root: __dirname,  //根目录
                verbose:true,  //开启在控制台输出信息
                dry:false //启用删除文件
            }
	),
     new HtmlWebpackPlugin({
       title: 'Output Management',
	   template: './src/index.html'
     }),
	 //压缩js，按需打包js代码
	 new UglifyJSPlugin(),
	 new Ex('css/[hash].css')
	 //热更新
	// new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
   ]
};