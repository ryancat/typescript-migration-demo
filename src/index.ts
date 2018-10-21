import ModuleA from './ModuleA';
import * as myLibApi from './myLibApi.js';

const myLib = {
  ModuleA,
};

Object.assign(myLib, myLibApi);
export default myLib;
