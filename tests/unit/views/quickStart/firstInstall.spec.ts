import { initPageWithGlobal } from '../../main';
import FirstInstall from '@/views/quickStart/firstInstall/firstInstall.vue';

describe('views/quickStart/firstInstall/firstInstall.vue', () => {
  it('mock test firstInstall page', () => {
    const wrapper = initPageWithGlobal(FirstInstall);
    expect(wrapper.exists()).toBe(true);
  });
});
