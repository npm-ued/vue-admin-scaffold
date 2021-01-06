import { mount } from '@vue/test-utils';
import AsideMenu from '@/components/layout/aside-menu/aside-menu.vue';

describe('AsideMenu.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = mount(AsideMenu, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
