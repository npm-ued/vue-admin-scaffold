import { initPageWithGlobal } from '../../main';
import PostData from '@/views/basisFun/postData/postData.vue';

describe('views/basisFun/postData/postData.vue', () => {
  it('mock test postData page', () => {
    const wrapper = initPageWithGlobal(PostData);
    expect(wrapper.exists()).toBe(true);
  });
});
