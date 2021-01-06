import { initPageWithGlobal } from '../../main';
import StartConfig from '@/views/config/startConfig/startConfig.vue';

describe('startConfig.vue', () => {
  it('mock test startConfig page', () => {
    const wrapper = initPageWithGlobal(StartConfig);
    expect(wrapper.exists()).toBe(true);
  });
});
