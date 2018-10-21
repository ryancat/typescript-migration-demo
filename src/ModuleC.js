const ModuleC = function (config) {
  this.config = config;
};

ModuleC.prototype = {
  log: function (message) {
    console.log('[ModuleC]:', message);
  }
};

module.exports = ModuleC;
