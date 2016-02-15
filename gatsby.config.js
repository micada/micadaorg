import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = function (config, env) {
  config.loader('sass', function (cfg) {
    cfg.test = /\.scss$/;
    if (env === 'develop') {
      cfg.loader = 'style!css!sass';
    } else {
      cfg.loader = ExtractTextPlugin.extract('css?minimize!sass');
    }
    return cfg;
  });
  
  config.plugin('extract-css',
                ExtractTextPlugin,
                ['styles.css', {allChunks: true}]);

  config.loader('fonts', function (cfg) {
    cfg.test = /\.(ttf|eot|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/;
    cfg.loader = 'file-loader';
    return cfg;
  });
  config.loader('favicon', function (cfg) {
    cfg.test = /\.ico$/;
    cfg.loader = 'file-loader';
    return cfg;
  });

  return config;
};
