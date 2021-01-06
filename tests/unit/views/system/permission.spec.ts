import { initPageWithGlobal } from '../../main';
import Permission from '@/views/system/permission/permission.vue';

describe('permission.vue', () => {
  it('mock test permission page', () => {
    const wrapper = initPageWithGlobal(Permission);
    expect(wrapper.exists()).toBe(true);
  });
});
