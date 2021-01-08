import { mount } from '@vue/test-utils';
import HeaderBar from '@/components/layout/header-bar/header-bar.vue';

describe('components/layout/header-bar/header-bar.vue', () => {
  it('smoke test', () => {
    const wrapper = mount(HeaderBar);
    expect(wrapper.exists()).toBe(true);
  });
});
