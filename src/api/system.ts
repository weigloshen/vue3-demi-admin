import request from '@/utils';
import type {
  IInformations,
  IMenus,
  IPermissions,
} from '@/store/modules/system';
const getSystemMenuList = async (
  page_size: number,
  current_page: number,
  attribute?: string,
) => {
  return await request.get<IMenus[]>({
    url: 'system/menu/list',
    params: {
      page_size,
      current_page,
      attribute,
    },
  });
};
const getSystemPermissionsList = async (
  page_size: number,
  current_page: number,
  attribute?: any,
) => {
  return await request.get<IPermissions[]>({
    url: 'system/permissions/list',
    params: {
      page_size,
      current_page,
      attribute,
    },
  });
};
const getSystemInformationsList = async (
  page_size: number,
  current_page: number,
  attribute?: any,
) => {
  return await request.get<IInformations[]>({
    url: 'system/information/list',
    params: {
      page_size,
      current_page,
      attribute,
    },
  });
};
export {
  getSystemMenuList,
  getSystemPermissionsList,
  getSystemInformationsList,
};
