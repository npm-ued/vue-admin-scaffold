import { initPageWithGlobal } from './main';
import App from '@/App.vue';

describe('Login.vue', () => {
  it('mock test login page', () => {
    const wrapper = initPageWithGlobal(App);
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });
});
