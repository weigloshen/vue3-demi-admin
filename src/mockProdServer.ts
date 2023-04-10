import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';
import home from '../mock/home';
// import log from '../mock/log';
import system from '../mock/system';

// export const mockModules = [...home, ...log, ...system];
export const mockModules = [...home, ...system];

export function setupProdMockServer() {
  createProdMockServer(mockModules);
}
