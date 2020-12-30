// import { RouteRecordRaw } from 'vue-router';
import home from './default';
import user from './user';
import system from './sysytem';
import quickStart from './start';
import setting from './setting';
import basisFun from './basisFun';
// const routes: Array<RouteRecordRaw> = [...home, ...user];

export default [
  ...quickStart,
  ...setting,
  ...basisFun,
  ...home,
  ...user,
  ...system
];
