import { shallowMount, mount } from '@vue/test-utils';
import Login from '@/views/login/login.vue';

describe('Login.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(Login);
    const loginTitle = wrapper.find('.loginTitle');
    expect(loginTitle.text()).toMatch('Vue3.0 Admin');
  });
});
