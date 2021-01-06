import { initPageWithGlobal } from '../../main';
import Installation from '@/views/quickStart/installation/installation.vue';

describe('views/quickStart/installation/installation.vue', () => {
  it('mock test installation page', () => {
    const wrapper = initPageWithGlobal(Installation);
    expect(wrapper.exists()).toBe(true);
  });
});
