module.exports = {
  initModuleA: function (config) {
    this.config = config;
  },
  
  log: function (message) {
    console.log('[ModuleA]', message);
  },

  run: function () {
    return 'ModuleA';
  }
};
