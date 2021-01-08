import { initPageWithGlobal } from '../../main';
import CustomList from '@/components/custom-list/custom-list.vue';
import { VueWrapper } from '@vue/test-utils';
import api from '@/api';

describe('components/custom-list/custom-list.vue', () => {
  let wrapper: VueWrapper<any>;
  it('smoke test customlist', () => {
    const columns = [
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
        width: 230
      },
      {
        title: '手机号',
        key: 'mobile'
      }
    ];
    const filterItems = [
      // 用户名称
      {
        label: '用户名称',
        model: 'name'
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
      // 放款开始时间
      {
        type: 'date',
        model: 'date1',
        label: '放款开始时间'
      },
      {
        type: 'button',
        span: 12
      }
    ];
    wrapper = initPageWithGlobal(CustomList, {
      props: {
        columns,
        filterItems
      }
    });
    expect(wrapper.exists()).toBe(true);
    const filters = wrapper.findAll('.filterOutBox .filterInputItem');
    expect(filters.length).toBe(3);
  });

  it('mock getData', async () => {
    // 查询按钮
    const queryBtn = wrapper.find(
      '.filterOutBox .el-button.el-button--primary'
    );
    expect(queryBtn.exists()).toBeTruthy();
    await queryBtn.trigger('click');
    expect(api.login.userList).toBeCalled();
    // 重置按钮
    const resetBtn = wrapper.find(
      '.filterOutBox .el-button.el-button--default'
    );
    await resetBtn.trigger('click');
    expect(api.login.userList).toBeCalled();
  });

  it('mock getData', async () => {
    const expandLink = wrapper.find('.filterOutBox .el-link.el-link--primary');
    expect(expandLink.text()).toBe('Expand');
    await expandLink.trigger('click');
    expect(expandLink.text()).toBe('Collapse');
  });
});
