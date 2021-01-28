function getColumns(): Array<TableColumn> {
  // 列
  const columns: TableColumn[] = [
    {
      title: '姓名',
      key: 'firstName'
    },
    {
      title: '性别',
      key: 'sex'
    },
    {
      title: '状态',
      key: 'status'
    },
    {
      title: '注册时间',
      key: 'regTime'
    },
    {
      title: '身份证号',
      key: 'idCardNo',
      minWidth: 230
    },
    {
      title: '手机号',
      key: 'mobile'
    }
  ];
  return columns;
}
export default getColumns;
