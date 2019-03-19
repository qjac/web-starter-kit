const path = require('path');
  const HtmlWebpackPlugin = require('html-webpack-plugin');
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
    	app: './src/index.js'
    }, 
    plugins: [
    	new CleanWebpackPlugin(),
    	new HtmlWebpackPlugin({
    		title: 'Production'
    	})
    ],
    output: {
	  filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
      module: {     
    	rules: [
    	{
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
  {
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    'file-loader',
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true, // webpack@1.x
        disable: true, // webpack@2.x and newer
      },
    },
  ],
},
      {
      	test: /\.(woff|woff2|eot|ttf|otf)$/,
      	use: [
      	'file-loader'
      	]
      },
      {
      	test: /\.(csv|tsv)$/,
      	use: [
      		'csv-loader'
      	]
      },
      {
      	test: /\.xml$/,
      	use: [
      		'xml-loader'
      	]
      }


    ]
  }
  };

 
  