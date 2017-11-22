const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Ex = require("extract-text-webpack-plugin");
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  entry: {
	  common: './src/js/common.js',
	  jquery: './src/js/jquery.min.js',
	  swiper: './src/js/swiper-3.4.0.min.js',
	  app: './src/entry.js'
  },
  output: {
    filename: 'js/[name].bundle.js',
	publicPath: '/dist',
    path: path.resolve(__dirname, 'dist'),
	libraryTarget : 'var'
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
			   name: '/font/[hash].[ext]'
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
	  new HtmlWebpackPlugin({
	   template: './src/media.html',
	   filename:'media.html'
     }),
	  new HtmlWebpackPlugin({
	   template: './src/user.html',
	   filename:'user.html'
     }),
	 
	 //加载jquery第三方库
	 new webpack.ProvidePlugin({
          "$": "jquery",
          "jQuery": "jquery",
          "window.jQuery": "jquery"
      }),
	 //压缩js，按需打包js代码
	 new UglifyJSPlugin(),
	 new Ex('css/[hash].css'),
	 //图片压缩,比较耗时,开发环境关闭
	 new ImageminPlugin({
      disable: false, 
      pngquant: {
        quality: '20-30'
      }
    })
	 //热更新
	// new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
   ]
};