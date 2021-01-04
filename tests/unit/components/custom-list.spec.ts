import { shallowMount, mount } from '@vue/test-utils';
import CustomList from '@/components/custom-list/custom-list.vue';
import localeVue from '../main';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = mount(CustomList, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
