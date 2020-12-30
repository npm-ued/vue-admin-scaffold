import { RouteLocationNormalizedLoaded } from 'vue-router';
import { TagNav } from '../tags-nav';
import { Store } from 'vuex';
import HomeRoute from '../../../../router/modules/home';

function getNewTagList(
  list: TagNav[],
  newRoute: RouteLocationNormalizedLoaded
) {
  const { name, path, meta } = newRoute;
  let newList: TagNav[] = [...list];
  // 如果home存在，则插入到第一个
  const homeIndex = list.findIndex((item) => {
    return item.name == 'home';
  });
  if (homeIndex == -1) {
    const { name, path, meta } = HomeRoute;
    const title = meta?.title as string;
    newList = [
      {
        name: name as string,
        path,
        meta,
        title
      },
      ...newList
    ];
  }
  if (newList.findIndex((item) => item.name === name) >= 0) {
    return newList;
  } else {
    const title = meta?.title as string;
    newList.push({
      name: name as string,
      path,
      meta,
      title
    });
  }
  return newList;
}

function setTagNavList(
  curentRoute: RouteLocationNormalizedLoaded,
  store: Store<any>
) {
  const tagNavList = store.state.app.tagNavList;
  const newList = getNewTagList(tagNavList, curentRoute);
  // 同步store存储
  store.commit('app/setNavList', newList);
  const { name } = curentRoute;
  return { currentName: name };
}

export default setTagNavList;
