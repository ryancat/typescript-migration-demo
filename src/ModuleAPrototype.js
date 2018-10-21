var ModuleC = require('./ModuleC');

module.exports = {
  initModuleA: function (config) {
    this.config = config;
  },
  
  log: function (message) {
    console.log('[ModuleA]', message);
  },

  run: function () {
    var moduleC = new ModuleC(this.config);
    return 'ModuleA' + '-' + moduleC.run();
  }
};
