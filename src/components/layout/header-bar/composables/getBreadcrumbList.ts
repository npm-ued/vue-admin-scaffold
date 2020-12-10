import { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router';
import { Breadcrumb } from '../header-bar';
import routeList from '../../../../router/modules';

/**
 * 获取首页导航
 * @param routers 路由列表
 * @param homeName 首页路由名
 */
function getHomeRoute(routers: RouteRecordRaw[], homeName: string): Breadcrumb {
  homeName = homeName || 'home';
  let home: Breadcrumb = { name: '' };
  let i = -1;
  // const routes: Array<RouteRecordRaw> = [...routeList];
  const len = routers.length;
  while (++i < len) {
    const item = routers[i];
    if (item.children && item.children.length) {
      const res = getHomeRoute(item.children, homeName);
      if (res.name) {
        home = res;
      }
    } else {
      if (item.name === homeName) {
        const { name, path, meta } = item;
        home = { name, path, icon: meta?.icon };
      }
    }
  }
  return home;
}

/**
 * 获取面包屑导航列表
 * @param {RouteLocationNormalizedLoaded} curentRoute 当前路径
 * @returns {RouteLocationNormalizedLoaded[]} 面包屑导航列表
 */
function getBreadcrumbList(
  curentRoute: RouteLocationNormalizedLoaded
): Breadcrumb[] {
  let list: Breadcrumb[] = [];
  // 获取首页的面包屑选项
  const homeItem: Breadcrumb = getHomeRoute(routeList, 'home');
  // 当前路由的匹配
  const { matched } = curentRoute;
  // console.log(matched.some((item) => item.name === homeItem.name));
  // 如果是首页路径，则直接返回
  if (matched.some((item) => item.name === homeItem.name)) {
    return [homeItem];
  }
  list = matched.map((item) => {
    const { name, path, meta } = item;
    const nameStr = name as string; // 类型强转
    return { name: nameStr };
  });
  list.unshift(homeItem);
  return list;
}

export default getBreadcrumbList;
