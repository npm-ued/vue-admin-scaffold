import { mount } from '@vue/test-utils';
import TagsNav from '@/components/layout/tags-nav/tags-nav.vue';

describe('components/layout/tags-nav/tags-nav.vue', () => {
  it('smoke test', () => {
    const wrapper = mount(TagsNav);
    expect(wrapper.exists()).toBe(true);
  });
});
