import { initPageWithGlobal } from '../../main';
import AddPage from '@/views/basisFun/addPage/addPage.vue';

describe('views/basisFun/addPage/addPage.vue', () => {
  it('mock test addPage page', () => {
    const wrapper = initPageWithGlobal(AddPage);
    expect(wrapper.exists()).toBe(true);
  });
});
