export interface Option {
  name: string;
  value: string;
}

class Config {
  /**
   * 性别
   */
  static sexState: Array<Option> = [
    { name: '男', value: 'MALE' },
    { name: '女', value: 'FEMALE' }
  ];
  /**
   * 订单状态
   */
  static orderState: Array<Option> = [
    { name: '正常', value: 'NORMAL' },
    { name: '异常', value: '1' }
  ];
}
export default Config;
