import { UserApi } from '@/api/user';

// type ReturnType = RenderFunction | void;
export default function getUserList(ajax: any) {
  const query = (dataConfig: any) => {
    const { data, complete } = dataConfig;
    const config = {
      data
    };
    const userApi: UserApi = ajax.user;
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
