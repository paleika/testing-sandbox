const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    { 
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            }
        ]
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    }
}