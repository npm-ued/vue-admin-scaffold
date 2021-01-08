import { mount } from '@vue/test-utils';
import CommonView from '@/components/layout/common-view/common-view.vue';

describe('components/layout/common-view/common-view.vue', () => {
  it('smoke test', () => {
    const wrapper = mount(CommonView);
    expect(wrapper.exists()).toBe(true);
  });
});
