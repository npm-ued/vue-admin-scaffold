import { initPageWithGlobal } from '../../main';
import CataLog from '@/views/quickStart/catalog/catalog.vue';

describe('views/quickStart/catalog/catalog.vue', () => {
  it('mock test Catalog page', () => {
    const wrapper = initPageWithGlobal(CataLog);
    expect(wrapper.exists()).toBe(true);
  });
});
