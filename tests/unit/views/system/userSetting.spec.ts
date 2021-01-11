import { initPageWithGlobal } from '../../main';
import UserSetting from '@/views/system/userSetting/userSetting.vue';
import { VueWrapper } from '@vue/test-utils';
import api from '@/api';
// import axios from 'axios';
// jest.mock('@/api'); // 模拟axios

describe('views/system/userSetting/userSetting.vue', () => {
  let wrapper: VueWrapper<any>;
  const list = {
    data: {
      code: 200,
      data: {
        endRow: 10,
        firstPage: 1,
        hasNextPage: true,
        hasPreviousPage: true,
        isFirstPage: true,
        isLastPage: true,
        lastPage: 0,
        list: [
          {
            birthday: '2020-12-21T06:48:38.000+0000',
            firstName: '谢超',
            idCardNo: '540000199410108900',
            idCardType: '',
            lastName: '谢娜',
            middleName: '李洋',
            mobile: 18841359557,
            regTime: '2020-12-21T06:48:39.000+0000',
            sex: 'FEMALE',
            status: 'NORMAL',
            uname: '650000197912306882'
          }
        ],
        total: 43
      },
      msg: 'string'
    }
  };
  // 请求模拟
  api.user.userList.mockResolvedValue(list);
  it('mock test permission page', () => {
    wrapper = initPageWithGlobal(UserSetting);
    expect(wrapper.exists()).toBe(true);
  });

  it('trigger Btn', async () => {
    const queryBtn = wrapper.find('.fliterRight .el-button.el-button--primary');
    expect(queryBtn.exists()).toBe(true);
    await queryBtn.trigger('click');
    expect(api.user.userList).toBeCalled();
    const totalLabel = wrapper.find('.el-pagination__total');
    expect(totalLabel.exists()).toBe(true);
    expect(totalLabel.text()).toBe('共 43 条');
  });
});
