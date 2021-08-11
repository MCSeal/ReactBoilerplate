//webpack config needs 2 things

//entry -> output
const path = require('path');




module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    //points webpack to use babel and avoid nodemodules
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        //css rule attached to the 2 installs:
        {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
    
        }]
    },
    //allows to point error line in the orginal file not the remade webpack
    devtool: 'cheap-module-eval-source-map',
    //setup server for personal browser viewing
    devServer:{
        compress: true,
        disableHostCheck: true,
        contentBase: path.join(__dirname, '/public')
    }
};