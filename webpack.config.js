const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        filename: 'iceflower.js',
        path: path.resolve(__dirname, 'demo')
    },
    module: {
        rules: [{
            test: /\.(html)$/,
            use: {
                loader: 'html-loader'
            }
        }]
    }
}