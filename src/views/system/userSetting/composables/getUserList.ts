import { LoginApi } from '@/api/login';

// type ReturnType = RenderFunction | void;
export default function getUserList(ajax: any): any {
  const getUserInfo = function () {
    const loginApi: LoginApi = ajax.login;
    loginApi.userInfo({
      success: function (res: any, d: any) {
        const res1 = res.data;
        const list = d(res1);
        console.log(d(res1));
      },
      error: function (error: any) {
        console.log(error);
      }
    });
  };
  return { getUserInfo };
}
