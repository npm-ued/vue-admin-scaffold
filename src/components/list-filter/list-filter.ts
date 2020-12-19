export interface ListFilterProps {
  formItems: unknown[];
  filter: Record<string, any>;
  defaultSpan: number;
}
// 字段在热更新的时候，报错，需要重启
export interface FormItem {
  label: string;
  model: string;
  type?: string;
  span?: number;
  buttonArr?: ButtonItem[];
}

interface ButtonItem {
  message: string;
  type: string;
  fun: string;
}

export interface FilterModel {
  [propName: string]: string;
}
