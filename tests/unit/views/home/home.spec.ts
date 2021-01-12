import { initPageWithGlobal } from '../../main';
import Home from '@/views/home/home.vue';
import { VueWrapper } from '@vue/test-utils';
import { nextTick } from 'vue';

describe('views/home/home.vue', () => {
  let wrapper: VueWrapper<any>;
  it('mock test home page', () => {
    wrapper = initPageWithGlobal(Home);
    expect(wrapper.exists()).toBe(true);
  });

  it('toggle collapsed', async () => {
    const collapseIcon = wrapper.find('.collapseIcon');
    expect(collapseIcon.exists()).toBeTruthy();
    await collapseIcon.trigger('click');
    expect(wrapper.find('.logo-mini').exists()).toBeTruthy();
    await collapseIcon.trigger('click');
    expect(wrapper.find('.logo-mini').exists()).toBeFalsy();
    expect(wrapper.exists()).toBeTruthy();
  });

  it('click nav', async () => {
    const qiuckStart = wrapper.findAll(
      '.aside-menu-wrapper .el-menu .el-submenu'
    )[0];
    expect(qiuckStart.exists()).toBeTruthy();
    qiuckStart.trigger('click');
    await nextTick();
    // expect(qiuckStart.classes()).toContain('is-opened');
    const installNav = qiuckStart.findAll('.el-menu-item-group')[0];
    expect(installNav.exists()).toBeTruthy();
    expect(installNav.text()).toContain('Installation');
    await installNav.trigger('click');
    // expect(router.push).toBeCalled();
    // expect(router.push).toBeCalledWith({});
  });
});
