import { RouteLocationNormalizedLoaded } from 'vue-router';
import { TagNav } from '../tags-nav';
import { Store } from 'vuex';

function getNewTagList(
  list: TagNav[],
  newRoute: RouteLocationNormalizedLoaded
) {
  const { name, path, meta } = newRoute;
  const newList = [...list];
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
  return newList;
}

export default setTagNavList;
