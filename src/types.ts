// module types
export enum ModuleType {
  Smart = 'smart',
  Dumb = 'dumb',
}

// moduleA config data types
export interface IModuleAConfig {
  name: string;
  type: ModuleType;
}
