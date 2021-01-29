import Config from '@/assets/config/static';
import { TableColumn } from '@/components/custom-list/custom-list';
import { ElButton } from 'element-plus';
import { useI18n } from 'vue-i18n';
import Util from '@/assets/js/util';
/**
 * 编辑弹窗
 * @param row 行数据
 */
function editDialog(row: any) {
  console.log(row);
}

function getColumns(): Array<TableColumn> {
  const { t } = useI18n();
  // 初始化列数据
  const columns: TableColumn[] = [
    {
      title: '姓名',
      key: 'firstName'
    },
    {
      title: '性别',
      key: 'sex',
      formatter: (row: any, column: any, cellValue: string) => {
        return Util.getListMap(Config.sexState)?.[cellValue] || '';
      }
    },
    {
      title: '状态',
      key: 'status',
      formatter: (row: any, column: any, cellValue: string) => {
        return Util.getListMap(Config.orderState)?.[cellValue] || '';
      }
    },
    {
      title: '注册时间',
      key: 'regTime'
    },
    {
      title: '身份证号',
      key: 'idCardNo',
      minWidth: 130
    },
    {
      title: '手机号',
      key: 'mobile'
    },
    {
      title: '操作',
      key: 'operate',
      minWidth: 150,
      render: (h: any, row: any) => {
        const btns: any[] = [];
        const Button = ElButton;
        const editBtn = h(
          Button,
          {
            type: 'primary',
            size: 'mini',
            onclick: () => {
              editDialog(row);
            }
          },
          '编辑'
        );
        const linkBtn = h(
          Button,
          {
            type: 'success',
            size: 'mini'
          },
          '链接'
        );
        const delBtn = h(
          Button,
          {
            type: 'warning',
            size: 'mini'
          },
          '删除'
        );
        btns.push(editBtn, linkBtn, delBtn);
        return h('div', {}, btns);
      }
    }
  ];
  return columns;
}
export default getColumns;
