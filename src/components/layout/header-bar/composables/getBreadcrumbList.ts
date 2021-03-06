import { RouteLocationNormalizedLoaded, RouteRecordRaw } from 'vue-router';
import { Breadcrumb } from '../header-bar';
import routeList from '../../../../router/modules';
import HomeRoute from '../../../../router/modules/home';

/**
 * 获取首页导航
 * @param routers 路由列表
 * @param homeName 首页路由名
 */
function getHomeRoute(): Breadcrumb {
  const { name, path, meta } = HomeRoute;
  const title = meta?.title as string;
  const home: Breadcrumb = { name, path, icon: meta?.icon, title };
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
  const homeItem: Breadcrumb = getHomeRoute();
  // const homeItem: Breadcrumb = HomeRoute
  // 当前路由的匹配
  const { matched } = curentRoute;
  // console.log(matched.some((item) => item.name === homeItem.name));
  // 如果是首页路径，则直接返回
  if (matched.some((item) => item.name === homeItem.name)) {
    return [homeItem];
  }
  list = matched.map((item) => {
    const { name, meta } = item;
    const nameStr = name as string; // 类型强转
    const title = meta?.title as string;
    return { name: nameStr, title };
  });
  list.unshift(homeItem);
  return list;
}

export default getBreadcrumbList;
