import ModuleA from './ModuleA';
import * as myLibApi from './myLibApi.js';

const myLib = {
  ModuleA,
};

Object.assign(myLib, myLibApi);

// Use export = myLib so that the CommonJS require function
// still works as before.
export = myLib;
