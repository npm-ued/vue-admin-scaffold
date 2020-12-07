/**
 * 当前菜单是否显示
 * @param item 当前节点
 * @param {string[]} access 权限数组
 */
function showThisMenuEle(item: any, access: string[]): boolean {
  if (item.meta && item.meta.access && item.meta.access.length) {
    const accessArray = access;
    const flag = item.meta.access.some((permission: string) => {
      return accessArray.includes(permission);
    });
    return flag;
  } else {
    return true;
  }
}

/**
 * 通过路由配置和权限获取导航
 * @param routers 路由
 * @param userAccess 权限
 */
function menuListByRoutes(routers: any[], userAccess: string[]): any[] {
  const res: any[] = [];
  if (routers && routers.length > 0) {
    routers.forEach((item: any) => {
      if (
        item.meta &&
        !item.meta.hideInMenu &&
        showThisMenuEle(item, userAccess)
      ) {
        const obj: any = {
          icon: (item.meta && item.meta.icon) || '',
          name: item.name,
          meta: item.meta
        };
        if (item.children && item.children.length !== 0) {
          // TODO 递归优化
          obj.children = menuListByRoutes(item.children, userAccess);
        }
        if (item.meta && item.meta.href) {
          obj.href = item.meta.href;
        }
        res.push(obj);
      }
    });
  }
  return res;
}

export default menuListByRoutes;
