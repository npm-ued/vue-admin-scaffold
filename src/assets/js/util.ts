import { Option } from '@/assets/config/static';
class Util {
  /**
   * 将对象数组装换成对象
   * @param list 对象数组
   * @returns
   */
  static getListMap = (list: Array<Option>) => {
    const newObj: { [propName: string]: string } = {};
    list.forEach((item) => {
      newObj[item.value] = item.name;
    });
    return newObj;
  };
}
export default Util;
