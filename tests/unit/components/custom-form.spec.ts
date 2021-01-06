import { mount } from '@vue/test-utils';
import CustomForm from '@/components/custom-form/custom-form.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = mount(CustomForm, {
      props: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
