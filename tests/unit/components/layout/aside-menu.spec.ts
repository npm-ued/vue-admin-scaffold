import { mount } from '@vue/test-utils';
import AsideMenu from '@/components/layout/aside-menu/aside-menu.vue';

describe('components/layout/aside-menu/aside-menu.vue', () => {
  it('smoke test', () => {
    const wrapper = mount(AsideMenu);
    expect(wrapper.exists()).toBe(true);
  });
});
