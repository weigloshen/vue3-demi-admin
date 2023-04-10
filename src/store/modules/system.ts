import { defineStore } from 'pinia';
import {
  getSystemMenuList,
  getSystemPermissionsList,
  getSystemInformationsList,
  getMonitorLogin_logList,
} from '@/api';
export interface IMenus {
  name: string;
  path: string;
  redirect: string;
  emoji: string;
  birthdate: string;
  attribute: 'catalog' | 'menu';
}
enum PERMISSIONS {
  'ADMIN' = 'ADMIN',
  'GUEST' = 'GUEST',
  'USER' = 'USER',
}

export interface IPermissions {
  name: string;
  permissions: PERMISSIONS;
  avatar: string;
  department: string;
}
export interface IInformations {
  name: string;
  emoji: string;
  information: string;
  email: string;
  location: string;
  ip: string;
}

interface SystemState {
  menus: IMenus[];
  permissions: IPermissions[];
  informations: IInformations[];
  login_log: Array<any>;
  isLoading: boolean;
}

export const useSystemStore = defineStore('system', {
  state: (): SystemState => ({
    menus: [],
    permissions: [],
    informations: [],
    login_log: [],
    isLoading: false,
  }),
  getters: {},
  actions: {
    async sendApi(
      name: 'menus' | 'permissions' | 'informations' | 'login_log',
      page_size = 10,
      current_page = 1,
      attribute?: string,
    ) {
      switch (name) {
        case 'menus':
          this.getMenus(page_size, current_page, attribute);
          break;
        case 'permissions':
          this.getPermissions(page_size, current_page, attribute);
          break;
        case 'informations':
          this.getInformations(page_size, current_page, attribute);
          break;
        case 'login_log':
          this.getLogin_log(page_size, current_page, attribute);
          break;
        default:
          break;
      }
    },
    async getMenus(
      page_size: number,
      current_page: number,
      attribute?: string,
    ) {
      this.isLoading = true;
      const data = await getSystemMenuList(page_size, current_page, attribute);
      this.menus = data.data;

      this.isLoading = false;
    },
    async getPermissions(
      page_size: number,
      current_page: number,
      attribute?: any,
    ) {
      this.isLoading = true;
      const data = await getSystemPermissionsList(
        page_size,
        current_page,
        attribute,
      );
      this.permissions = data.data;

      this.isLoading = false;
    },
    async getInformations(
      page_size: number,
      current_page: number,
      attribute?: string,
    ) {
      this.isLoading = true;
      const data = await getSystemInformationsList(
        page_size,
        current_page,
        attribute,
      );
      this.informations = data.data;

      this.isLoading = false;
    },
    async getLogin_log(
      page_size: number,
      current_page: number,
      attribute?: any,
    ) {
      this.isLoading = true;
      const data = await getMonitorLogin_logList(
        page_size,
        current_page,
        attribute,
      );
      this.login_log = data.data as any[];
      console.log(data.data);

      this.isLoading = false;
    },
  },
});
