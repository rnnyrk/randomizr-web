const path = require('path');

module.exports = {
	name: 'client',
	entry: [
		path.resolve(__dirname, 'src'),
	],
	output: {
		path: path.resolve(__dirname, 'dist/public'),
		filename: 'bundle.js',
		publicPath: '/dist/public',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src'),
			},
			{ test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
			{ test: /\.svg$/, loader: 'raw-loader' },
		],
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
			app: path.resolve(__dirname, './src/app'),
			ducks: path.resolve(__dirname, './src/app/ducks'),
			sagas: path.resolve(__dirname, './src/app/sagas'),
			components: path.resolve(__dirname, './src/app/components'),
			server: path.resolve(__dirname, './src/server'),
		},
	},
	devtool: 'eval',
};