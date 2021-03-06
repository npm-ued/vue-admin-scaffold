import { ref } from 'vue';
import { FormItem } from '../custom-list';

export enum FilterType {
  input = 'input',
  select = 'select',
  date = 'date',
  datetime = 'datetime',
  button = 'button'
}
/**
 * 初始化字段值
 * @param formItems form的数组配置
 * @param defaultSpan 一列默认的宽度（栅格）
 */
function initFields(formItems: FormItem[], defaultSpan = 4) {
  const fields: Array<FormItem[]> = [];
  const spanNum = 24;
  if (formItems && formItems.length) {
    let row: FormItem[] = [],
      span = 0;
    for (let i = 0; i < formItems.length; i++) {
      const config = {
        type: FilterType.input, // 默认类型
        span: defaultSpan, // 补全span
        isShow: true // 补全isShow 属性
      };
      const item: FormItem = Object.assign(config, formItems[i]);
      const { type } = item;
      item.type = type?.toLocaleLowerCase();
      if (item && item.isShow) {
        span += item.span || defaultSpan;
        row.push(item);
        if (span >= spanNum) {
          fields.push(row);
          span = 0;
          row = [];
        } else {
          if (i + 1 == formItems.length) {
            fields.push(row);
          }
        }
      }
    }
  }
  return {
    fields: ref(fields)
  };
}

export default initFields;
