export interface FilterReturn {
  filterModel: FilterModel;
  resetForm: Function;
  query: Function;
}

// 设置快捷选项
interface Shortcut {
  text: string;
  value: any;
}

interface Option {
  value: string | number;
  name: string;
  disabled: boolean;
}
export interface FormItem {
  label: string;
  model: string;
  type?: string;
  span?: number;
  buttonArr?: ButtonItem[];
  shortcuts?: Shortcut[];
  options?: Option[];
  isShow?: boolean;
}

interface ButtonItem {
  message: string;
  type: string;
  fun: string;
}

export interface FilterModel {
  [propName: string]: string | undefined;
}
