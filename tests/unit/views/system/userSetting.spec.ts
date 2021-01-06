import { initPageWithGlobal } from '../../main';
import UserSetting from '@/views/system/userSetting/userSetting.vue';

describe('permission.vue', () => {
  it('mock test permission page', () => {
    const wrapper = initPageWithGlobal(UserSetting);
    expect(wrapper.exists()).toBe(true);
  });
});
