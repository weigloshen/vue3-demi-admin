import index from './src/form.vue';
export default index;

export interface IFormOptions {
  label: string;
  field: string;
  type: string;
  placeholder: string;
  children?: Array<{
    label: string;
    value: string;
  }>;
}
export interface Props {
  labelPosition: 'top' | 'right' | 'left';
  options: Array<IFormOptions>;
  labelWidth?: string;
  itemStyle?: any;
}
