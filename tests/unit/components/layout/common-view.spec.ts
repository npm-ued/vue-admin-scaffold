import { mount } from '@vue/test-utils';
import CommonView from '@/components/layout/common-view/common-view.vue';

describe('AsideMenu.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = mount(CommonView, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
