import { initPageWithGlobal } from '../../main';
import Home from '@/views/home/home.vue';

describe('views/home/home.vue', () => {
  it('mock test home page', () => {
    const wrapper = initPageWithGlobal(Home);
    expect(wrapper.exists()).toBe(true);
  });
});
