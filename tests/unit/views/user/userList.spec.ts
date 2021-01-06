import { initPageWithGlobal } from '../../main';
import UserList from '@/views/user/userList.vue';

describe('views/user/userList.vue', () => {
  it('mock test userList page', () => {
    const wrapper = initPageWithGlobal(UserList);
    expect(wrapper.exists()).toBe(true);
  });
});
