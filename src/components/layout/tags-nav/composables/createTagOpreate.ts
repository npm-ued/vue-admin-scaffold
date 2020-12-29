import { Store } from 'vuex';
import { TagNav } from '../tags-nav';

/**
 * 判断两个router是否相等(目前name是唯一值)
 * @param route1 路由1
 * @param router2 路由2
 */
function routerEqual(route1: TagNav, router2: TagNav): boolean {
  if (route1.name == router2.name) {
    return true;
  }
  return false;
}

/**
 * 关闭当前route
 * @param route 当前route
 */
function getNextRoute(navList: TagNav[], route: TagNav) {
  const index = navList.findIndex((item) => routerEqual(item, route));
  const { length } = navList;
  let nextRoute;
  // 如果是最后一个取倒数第二个，不然取下一个
  if (index === length - 1) {
    nextRoute = navList[length - 2];
  } else {
    nextRoute = navList[index + 1];
  }
  return nextRoute;
}

/**
 * 普通的关闭
 * @param router 路由对象
 * @param navList store中的navList
 * @param item 当前route
 */
function closeNormal(
  router: any,
  navList: TagNav[],
  item: TagNav,
  store: Store<any>
) {
  // 获取下一个路由
  const next = getNextRoute(navList as TagNav[], item);
  // 去掉当前路由
  const newList = navList.filter((route) => {
    return route.name != item.name;
  });
  // 新的navList更新
  store.commit('app/setNavList', newList);
  // 跳转到下一个路由
  router.push({ path: next.path });
}

function createTagOpreate(router: any, store: Store<any>) {
  const closeTag = (item: TagNav, type = 'normal') => {
    const navList = store.state.app.tagNavList; // 获取tagNavList
    switch (type) {
      case 'normal':
        closeNormal(router, navList, item, store);
        break;
      case 'all':
        // 去首页
        console.log('all');
        break;
      case 'other':
        // 不跳转
        console.log('other');
        break;
      default:
        break;
    }
  };
  const handleClick = (item: TagNav) => {
    const { path } = item;
    router.push({ path }); // 跳转
  };

  return { closeTag, handleClick };
}

export default createTagOpreate;
