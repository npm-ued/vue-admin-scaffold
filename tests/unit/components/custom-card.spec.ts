import { shallowMount, mount } from '@vue/test-utils';
import CustomCard from '@/components/custom-card/custom-card.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = mount(CustomCard, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
