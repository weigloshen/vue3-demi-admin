import index from './src/table.vue';
export default index;
export interface Props {
  dataName: 'menus';
  pageSize?: number;
  currentPage?: number;
}

export interface TableOption {
  prop: string;
  type?: string;
  label: string;
  width?: string;
  otherAttr?: any;
}
