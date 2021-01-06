import CustomCard from '@/components/custom-card/custom-card.vue';
import { initPageWithGlobal } from '../main';

describe('components/custom-card/custom-card.vue', () => {
  it('smoke test custom card component', () => {
    const wrapper = initPageWithGlobal(CustomCard);
    expect(wrapper.exists()).toBe(true);
    wrapper.unmount();
  });
});
