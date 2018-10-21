import { IModuleAConfig } from './types';
import * as ModuleAPrototype from './ModuleAPrototype.js';

class ModuleA {
  constructor(config: IModuleAConfig) {
    this.initModuleA(config);
  }

  // Need to add this to by pass typescript check
  // Will be overwritten by ModuleAPrototype
  private initModuleA(config: IModuleAConfig): void {}
}

Object.assign(ModuleA.prototype, ModuleAPrototype);

// Use export = ModuleA so that the CommonJS require function
// still works as before.
export = ModuleA;
