import { mount } from '@vue/test-utils';
import CustomForm from '@/components/custom-form/custom-form.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(CustomForm);
    expect(wrapper.text()).toMatch('custom From');
  });
});
