import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = function (config, env) {
  let isStatic = env === 'static';

  config.loader('sass', function (cfg) {
    cfg.test = /\.scss$/;
    if (isStatic) {
      cfg.loader = ExtractTextPlugin.extract('css?minimize!sass');
    } else {
      cfg.loader = 'style!css!sass';
    }
    return cfg;
  });
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
  if (isStatic) {
    config.plugin('extract-css',
                ExtractTextPlugin,
                ['styles.css', {allChunks: true}]);
  }
  return config;
};
