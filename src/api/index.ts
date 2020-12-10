import myserver from '../request/getrequest';
import login from './login';
import shop from './shop';
import user from './user';
const modules: Module = {
  login,
  shop,
  user
};
for (const moduleName in modules) {
  myserver.parseRouter(moduleName, modules[moduleName]);
}

interface Module {
  [moduleName: string]: {};
}

export default myserver;
