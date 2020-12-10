import { RenderFunction, ref, onMounted } from 'vue';
import { LoginApi } from '@/api/login';
import { useRouter } from 'vue-router';

// type ReturnType = RenderFunction | void;
export default function getUserInfoList(ajax: any, router: any): any {
  const getUserInfo = function () {
    const loginApi: LoginApi = ajax.login;
    loginApi.userInfo({
      success: function (res: any, d: any) {
        const res1 = res.data;
        const list = d(res1);
        console.log(d(res1));
        // const router = useRouter();
        router.push({ path: '/' });
      },
      error: function (error: any) {
        console.log(error);
      }
    });
  };
  // mounted时期执行
  // onMounted(getUserInfo);

  return { getUserInfo };
}
