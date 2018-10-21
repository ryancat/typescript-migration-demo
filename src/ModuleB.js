var ModuleB = function (config) {
  this.config = config;
};

ModuleB.prototype = {
  log: function (message) {
    console.log('[ModuleB]:', message);
  },

  run: function () {
    return 'ModuleB';
  }
};

module.exports = ModuleB;
