const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const nodeExternals = require('webpack-node-externals');
const config = require('./lib/config');
const config_webpack = config.webpack.toJS();

// main directories
const env = config.getEnv();
const root = config.getRoot();
const inputDir = path.normalize(`${root}/${config_webpack.inputDir}`);
const outputDir = path.normalize(`${root}/${config_webpack.outputDir}`);
const modulesDir = path.normalize(`${root}/node_modules`);
const initialsEntries = [].concat(config_webpack.polyfills).concat(config_webpack.hotReload ? ['webpack-hot-middleware/client'] : []);
const alias = Object // convert alias paths to absolute paths
  .keys(config_webpack.alias || {})
  .reduce((obj, key) => {
    const aliasPath = config_webpack.alias[key];
    if (aliasPath) {
      obj[key] = path.normalize(`${inputDir}/${aliasPath}`);
    }
    return obj;
  }, {});

const webpackConfig = {
  watch: config_webpack.hotReload,
  entry: Object // convert entries paths to absolute paths and inject initials entries (initials entries should always be first)
    .keys(config_webpack.entries)
    .reduce((obj, key) => {
      const entry = config_webpack.entries[key];
      if (entry) {
        obj[key] = initialsEntries.concat([].concat(entry).map(item => path.normalize(`${inputDir}/${item}`)));
      }
      return obj;
    }, {}),
  output: {
    path: outputDir,
    filename: "[name].js?[hash]",
    chunkFilename: "[id].js?[hash]",
    hotUpdateMainFilename: "hot-update.json?[hash]",
    hotUpdateChunkFilename: "[id].hot-update.js?[hash]",
    publicPath: `/${config.app.public}/`
  },
  resolve: {
    modules: [
      inputDir,
      modulesDir
    ],
    extensions: ['.js', '.jsx', '.json', '.scss', '.css'],
    alias
  },
  module: {
    rules: (
      [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: config_webpack.babel.ignore
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader'
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader'
        }
      ].concat(
        config_webpack.extractCSS ? [
          {
            test: /\.scss$|\.css$/,
            loader: ExtractTextPlugin.extract({
              use: ['css-loader', 'postcss-loader', 'sass-loader'],
              fallback: 'style-loader'
            })
          }
        ] : []
      )
    )
  },
  plugins: ([
      // predefined global variables
      new webpack.DefinePlugin({
        "process.env": {
          // remove warning about react under production, see: https://github.com/facebook/react/issues/6479
          NODE_ENV: JSON.stringify(env)
        },
        // if we need to check if development mode
        __DEV__: JSON.stringify(!config.isProduction())
      }),
      // copy files plugin
      new CopyWebpackPlugin(config_webpack.copy.map(dir => ({
        from: path.normalize(`${inputDir}/${dir}`),
        to: path.normalize(`${outputDir}/${dir}`)
      }))),
      // override some modules e.g env config file
      new webpack.NormalModuleReplacementPlugin(/config\/env.json/, path.normalize(`${inputDir}/config/${env}.json`)),
      new webpack.NormalModuleReplacementPlugin(/config\/native.default.json/, path.normalize(`${inputDir}/config/default.json`)),
      // loaders options
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer(), // auto prefix css for cross browser compatibility
          ],
          css: {
            minimize: config_webpack.optimize,
            importLoaders: true
          },
          babel: config_webpack.babel
        }
      }),
      // generate manifest.json so we can dynamically include our bundles ;),
      new ManifestPlugin({
        fileName: 'manifest.json',
        basePath: `/${config.app.public}/`
      })
    ].concat(
      // extract css from javascript
      config_webpack.extractCSS ? new ExtractTextPlugin({
        filename: `[name].css?[hash]`,
        allChunks: true
      }) : []
    ).concat(
      // split vendor js into its own file
      config_webpack.splitVendor ? new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: ({context}) => /node_modules/.test(context),
      }) : []
    ).concat(
      // optimization plugins
      config_webpack.optimize ? [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          mangle: true,
          compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: false,
            warnings: false
          }
        }),
        new CompressionWebpackPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(`\\.(${["css", "js"].join('|')}')$`),
          threshold: 10240,
          minRatio: 0.8
        })
      ] : []
    ).concat(
      // hot reload plugin
      config_webpack.hotReload ? new webpack.HotModuleReplacementPlugin() : []
    )
  ),
  externals: [
    (context, request, callback) => config_webpack.ignore.includes(request) ? callback(null, "require('" + request + "')") : callback()
  ].concat(
    config_webpack.ignore.includes("node_modules") ? nodeExternals({modulesDir}) : []
  ),
  devtool: config_webpack.optimize ? "nosources-source-map" : "source-map"
};

module.exports = webpackConfig;
