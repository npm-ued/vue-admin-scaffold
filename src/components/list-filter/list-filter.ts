export interface ListFilterProps {
  fields: FilterModel[];
  filterModel: Record<string, any>;
  defaultSpan: number;
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

// 字段在热更新的时候，报错，需要重启
export interface FormItem {
  label: string;
  model: string;
  type?: string;
  span?: number;
  buttonArr?: ButtonItem[];
  shortcuts?: Shortcut[];
  options?: Option[];
}

interface ButtonItem {
  message: string;
  type: string;
  fun: string;
}

export interface FilterModel {
  [propName: string]: string;
}
