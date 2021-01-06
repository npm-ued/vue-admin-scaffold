import { initPageWithGlobal } from '../../main';
import UserInfo from '@/views/user/userInfo/userInfo.vue';

describe('permission.vue', () => {
  it('mock test permission page', () => {
    const wrapper = initPageWithGlobal(UserInfo);
    expect(wrapper.exists()).toBe(true);
  });
});
