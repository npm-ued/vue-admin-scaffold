import { shallowMount, mount } from '@vue/test-utils';
import HeaderBar from '@/components/layout/header-bar/header-bar.vue';

describe('AsideMenu.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = mount(HeaderBar, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
