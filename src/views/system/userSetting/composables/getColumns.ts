interface TableColumn {
  title: string;
  key: string;
  width?: number;
  align?: string;
  sortable?: boolean;
}
function getColumns(): Array<TableColumn> {
  // 列
  const columns: TableColumn[] = [
    {
      title: '日期',
      key: 'date'
    },
    {
      title: '姓名',
      key: 'name'
    },
    {
      title: '省份',
      key: 'province'
    },
    {
      title: '市区',
      key: 'city'
    },
    {
      title: '地址',
      key: 'address',
      width: 230
    },
    {
      title: '邮编',
      key: 'zip'
    }
  ];
  return columns;
}
export default getColumns;
