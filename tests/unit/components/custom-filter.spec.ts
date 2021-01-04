import { shallowMount, mount } from '@vue/test-utils';
import ListFilter from '@/components/list-filter/list-filter.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = mount(ListFilter, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
