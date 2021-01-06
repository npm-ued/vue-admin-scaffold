import { initPageWithGlobal } from '../../main';
import MoreLan from '@/views/basisFun/moreLan/moreLan.vue';

describe('views/basisFun/moreLan/moreLan.vue', () => {
  it('mock test moreLan page', () => {
    const wrapper = initPageWithGlobal(MoreLan);
    expect(wrapper.exists()).toBe(true);
  });
});
