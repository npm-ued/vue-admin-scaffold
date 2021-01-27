import { UserApi } from '@/api/user';
import api from '@/api';

// type ReturnType = RenderFunction | void;
export default function getUserList() {
  const query = (dataConfig: any) => {
    const { data, complete } = dataConfig;
    const config = {
      data
    };
    const userApi: UserApi = api.user;
    userApi.userList(config).then(
      (res) => {
        complete(res);
      },
      () => {
        complete(undefined, 'error');
      }
    );
  };
  return { query };
}
