var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function(config, env) {
      config.loader('sass', function(cfg) {
      cfg.test = /\.scss$/;
      cfg.loader = ExtractTextPlugin.extract('css?minimize!sass');
      return cfg
    })
    config.loader('woff', function(cfg) {
      cfg.test = /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/;
      cfg.loader = 'url-loader?limit=10000&minetype=application/font-woff';
      return cfg
    })
    config.loader('font', function(cfg) {
      cfg.test =  /\.(ttf|eot|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/;
      cfg.loader = 'file-loader';
      return cfg
    })
    config.plugin('extract-css',
                  ExtractTextPlugin,
                  ["styles.css", { allChunks: true }]);
  return config;
};