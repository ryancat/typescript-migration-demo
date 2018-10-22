import * as myLibTypes from './types';
import ModuleA from './ModuleA';
import * as myLibApi from './myLibApi';

const myLib = {
  ModuleA,
  myLibTypes,
};

Object.assign(myLib, myLibApi);
export = myLib;
