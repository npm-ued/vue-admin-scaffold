import { mount } from '@vue/test-utils';
import CustomTable from '@/components/custom-table/custom-table.vue';

describe('components/custom-table/custom-table.vue', () => {
  it('mock test custom table component', () => {
    const msg = 'new message';
    const wrapper = mount(CustomTable);
    expect(wrapper.exists()).toBeTruthy();
  });
});
