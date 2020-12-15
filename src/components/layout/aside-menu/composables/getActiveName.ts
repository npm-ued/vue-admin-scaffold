import { RouteLocationNormalizedLoaded } from 'vue-router';
interface MenuActive {
  activeName: string;
  openNames: Array<string>;
}

/**
 * 根据当前路由对象获取activeName
 * @param curentRoute 当前路由对象
 */
function getActiveAndOpenName(
  curentRoute: RouteLocationNormalizedLoaded
): MenuActive {
  const { name } = curentRoute;
  const openNames: Array<string> = curentRoute.matched
    .map((item) => item.name)
    .filter((item) => item != name) as Array<string>;
  const menuActive: MenuActive = {
    activeName: name as string,
    openNames
  };
  return menuActive;
}

export default getActiveAndOpenName;
