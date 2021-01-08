import { initPageWithGlobal } from '../../main';
import ListFilter from '@/components/list-filter/list-filter.vue';

describe('components/list-filter/list-filter.vue', () => {
  it('smoke test', () => {
    const wrapper = initPageWithGlobal(ListFilter);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('btn call test', async () => {
    const mockFn1 = jest.fn();
    const mockFn2 = jest.fn();
    const fields = [
      [
        {
          isShow: true,
          label: '用户名称',
          type: 'input',
          model: 'name',
          span: 4
        },
        {
          type: 'button',
          span: 12,
          isShow: true
        }
      ]
    ];
    const filter = {
      name: ''
    };
    const wrapper = initPageWithGlobal(ListFilter, {
      props: {
        filter,
        fields,
        resetForm: mockFn1,
        query: mockFn2
      }
    });
    expect(wrapper.exists()).toBeTruthy();
    // 查询按钮
    const queryBtn = wrapper.find('.el-button.el-button--primary');
    expect(queryBtn.exists()).toBeTruthy();
    await queryBtn.trigger('click');
    expect(mockFn2).toBeCalled();
    // 重置按钮
    const resetBtn = wrapper.find('.el-button.el-button--default');
    expect(resetBtn.exists()).toBeTruthy();
    await resetBtn.trigger('click');
    expect(mockFn1).toBeCalled();
    
  });
});
