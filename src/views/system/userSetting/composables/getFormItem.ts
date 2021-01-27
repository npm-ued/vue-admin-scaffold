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
      options: [
        {
          name: '还款中',
          value: 0
        },
        {
          name: '结清',
          value: 1
        }
      ]
    },
    // 还款状态
    {
      label: '还款状态',
      model: 'payStatus',
      type: 'select',
      options: [
        {
          name: 'Y-1',
          value: 'Y-1'
        },
        {
          name: 'Y-0',
          value: 'Y-0'
        }
      ]
    },
    // 放款开始时间
    {
      type: 'date',
      model: 'date1',
      label: '放款开始时间'
    },
    // 放款结束时间
    {
      type: 'date',
      model: 'date2',
      label: '放款结束时间'
    },
    // 还款开始时间
    {
      type: 'date',
      model: 'date3',
      label: '还款开始时间'
    },
    // 还款结束时间
    {
      type: 'date',
      model: 'date4',
      label: '还款结束时间'
    },
    {
      type: 'button',
      span: 12
    }
  ];
}
export default getFormItems;
