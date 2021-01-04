import { shallowMount, mount } from '@vue/test-utils';
import TagsNav from '@/components/layout/tags-nav/tags-nav.vue';

describe('AsideMenu.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = mount(TagsNav, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
