import { initPageWithGlobal } from '../../main';
import Login from '@/views/login/login.vue';

describe('Login.vue', () => {
  it('mock test login page', () => {
    const wrapper = initPageWithGlobal(Login);
    const loginTitle = wrapper.find('.loginTitle');
    expect(loginTitle.text()).toMatch('Vue3.0 Admin');
  });
});
