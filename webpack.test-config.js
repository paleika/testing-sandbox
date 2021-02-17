const path = require('path')

module.exports = {
    entry: {
        'test': 'mocha-loader!./test/test-index.js'
    },
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './test',
        open: true,
        port: 8888
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
            
        ]
    },
    resolve: {
        fallback: {
            "util": require.resolve("util/"),
            "stream": require.resolve("stream-browserify"),
            "buffer": require.resolve("buffer/")
        },
    },

    output: {
        filename: 'test.bundle.js',
        path: path.resolve(__dirname, 'test'),
    }
}