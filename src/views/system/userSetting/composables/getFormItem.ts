import Config from '@/assets/config/static';

function getFormItems() {
  return [
    // 用户名称
    {
      label: '用户名称',
      model: 'name'
    },
    // 证件号
    {
      label: '证件号',
      model: 'no'
    },
    // 手机号
    {
      label: '手机号',
      model: 'mobile'
    },
    // 订单状态
    {
      label: '订单状态',
      model: 'status',
      type: 'select',
      options: Config.orderState
    },
    // 开始时间
    {
      type: 'date',
      model: 'date1',
      label: '开始时间'
    },
    // 结束时间
    {
      type: 'date',
      model: 'date2',
      label: '结束时间'
    },
    {
      type: 'button',
      span: 12
    }
  ];
}
export default getFormItems;
