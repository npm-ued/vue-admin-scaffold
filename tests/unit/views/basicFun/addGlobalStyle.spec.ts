import { initPageWithGlobal } from '../../main';
import AddGlobalStyle from '@/views/basisFun/addGlobalStyle/addGlobalStyle.vue';

describe('views/basisFun/addGlobalStyle/addGlobalStyle.vue', () => {
  it('mock test addGlobalStyle page', () => {
    const wrapper = initPageWithGlobal(AddGlobalStyle);
    expect(wrapper.exists()).toBe(true);
  });
});
