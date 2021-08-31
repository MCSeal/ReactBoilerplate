//webpack config needs 2 things

//entry -> output
const path = require('path');
const ExtractTextPlugin= require('extract-text-webpack-plugin');

//change in production from dev

module.exports = (env) => {
const isProduction = env === 'production';
const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
        
            }]
        },
        plugins: [
            CSSExtract
        ],
        //allows to point error line in the orginal file not the remade webpack
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        //setup server for personal browser viewing
        devServer:{
            compress: true,
            disableHostCheck: true,
            contentBase: path.join(__dirname, '/public'),
            //TO SENT HTML FILE TO EACH URL
            historyApiFallback: true
        }
    }    
};