import { initPageWithGlobal } from '../../main';
import AddMenu from '@/views/basisFun/addMenu/addMenu.vue';

describe('views/basisFun/addMenu/addMenu.vue', () => {
  it('mock test addMenu page', () => {
    const wrapper = initPageWithGlobal(AddMenu);
    expect(wrapper.exists()).toBe(true);
  });
});
