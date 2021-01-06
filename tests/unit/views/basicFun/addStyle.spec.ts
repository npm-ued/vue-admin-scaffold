import { initPageWithGlobal } from '../../main';
import AddStyle from '@/views/basisFun/addStyle/addStyle.vue';

describe('views/basisFun/addStyle/addStyle.vue', () => {
  it('mock test addStyle page', () => {
    const wrapper = initPageWithGlobal(AddStyle);
    expect(wrapper.exists()).toBe(true);
  });
});
