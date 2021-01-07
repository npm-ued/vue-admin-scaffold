import { initPageWithGlobal } from '../main';
import axios from 'axios';
// jest.mock('axios', () => ({
//   create: jest.fn(() => axios)
// }));
// axios.create = jest.fn(() => axios);
const mockAxios: any = jest.genMockFromModule('axios');
// axios.create = jest.fn(() => mockAxios);

import CustomList from '@/components/custom-list/custom-list.vue';

describe('HelloWorld.vue', () => {
  it('smoke test customlist component', () => {
    const wrapper = initPageWithGlobal(CustomList);
    expect(axios.create).toBeCalled();
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });

  it('smoke test customlist filter', () => {
    const wrapper = initPageWithGlobal(CustomList);
    expect(axios.create).toBeCalled();
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });
});
