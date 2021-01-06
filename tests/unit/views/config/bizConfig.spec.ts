import { initPageWithGlobal } from '../../main';
import BizConfig from '@/views/config/bizConfig/bizConfig.vue';

describe('bizConfig.vue', () => {
  it('mock test bizConfig page', () => {
    const wrapper = initPageWithGlobal(BizConfig);
    expect(wrapper.exists()).toBe(true);
  });
});
