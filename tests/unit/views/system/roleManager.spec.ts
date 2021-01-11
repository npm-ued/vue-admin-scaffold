import { initPageWithGlobal } from '../../main';
import RoleManager from '@/views/system/roleManager/roleManager.vue';

describe('permission.vue', () => {
  it('mock test permission page', () => {
    const wrapper = initPageWithGlobal(RoleManager);
    expect(wrapper.exists()).toBe(true);
    const text = wrapper.find('h1');
    expect(text.text()).toBe('roleManager');
  });
});
