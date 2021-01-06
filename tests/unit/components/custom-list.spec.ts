import { initPageWithGlobal } from '../main';
import CustomList from '@/components/custom-list/custom-list.vue';
jest.mock('axios');
describe('HelloWorld.vue', () => {
  it('smoke test customlist component', () => {
    const wrapper = initPageWithGlobal(CustomList);
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  it('smoke test customlist filter', () => {
    const wrapper = initPageWithGlobal(CustomList);
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });
  // it('test change page', () => {
  //   const wrapper = initPageWithGlobal(CustomList);
  //   const nextPageEle = wrapper.find('.el-icon.el-icon-arrow-right');
  //   expect(nextPageEle.exists()).toBe(true);
  //   wrapper.unmount();
  // });
});
