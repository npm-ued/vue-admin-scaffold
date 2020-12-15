<template>
  <div class="loginBox">
    <div class="loginTitle">{{ $t('SystemName') }}</div>
    <div class="loginMain clearfix">
      <div class="loginLeft">
        <img src="../../assets/image/login/loginLeft.png" alt="" />
      </div>
      <form class="loginForm" action="/login" method="post">
        <div class="loginFormTitle">{{ $t('Login.AdministratorLogin') }}</div>
        <p class="showMsg" v-show="showErrorMessage">{{ ErrorMessage }}</p>
        <div class="loginGroup">
          <div class="loginIcon">
            <img src="../../assets/image/login/userName.png" alt="" />
          </div>
          <input
            v-model.trim="loginUserName"
            class="loginControl"
            autocomplete="off"
            :placeholder="$t('Common.PleaseEnter')"
          />
        </div>
        <div class="loginGroup">
          <div class="loginIcon">
            <img src="../../assets/image/login/pwd.png" alt="" />
          </div>
          <input
            v-model.trim="code"
            class="loginControl"
            autocomplete="off"
            :placeholder="$t('Common.PleaseEnter')"
          />
          <el-button
            type="primary"
            v-if="codeStatus"
            class="codeBtn"
            @click="sendCode"
          >
            {{ $t('Login.GetCode') }}
          </el-button>
          <el-button type="default" v-else class="codeBtnDisable" disabled>
            {{ codeText }}{{ $t('Login.Resend') }}
          </el-button>
        </div>
        <div class="langWrap">
          <a @click="changeLanguage" class="langLink">
            {{ $t('CurrentLan') }}: {{ $t('LocaleLanguage') }}
          </a>
        </div>
        <div class="form-group">
          <el-button class="loginBtn" @click="login">
            {{ $t('Login.Login') }}
          </el-button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { changeLanguage } from '../../i18n';
export default defineComponent({
  name: 'login',
  setup(props) {
    const router = useRouter();
    const login = function () {
      router.push({ path: '/' });
    };
    return { changeLanguage, login };
  }
});
</script>
<style>
html {
  overflow: auto !important;
}
.loginBox {
  background: url('../../assets/image/login/loginBg.jpg') no-repeat center;
  background-size: 100% 100%;
  background-color: #e6e6e6;
  padding-top: 40px;
  width: 100%;
  height: 100%;
  min-height: 660px;
  position: absolute;
  font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
}

.loginTitle {
  font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
  line-height: 80px;
  font-style: normal;
  font-size: 52px;
  color: #1c4cff;
  text-align: center;
}

.loginFormTitle {
  font-size: 29px;
  color: #000000;
  font-style: normal;
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: 4px;
}
.loginMain {
  width: 900px;
  height: 480px;
  margin: 0 auto;
  margin-top: 40px;
}
.loginLeft {
  float: left;
  background: #e0e0e0;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 130px 61px;
  height: 481px;
  box-sizing: border-box;
}
.loginLeft img {
  display: block;
  width: 328px;
}
.loginForm {
  float: right;
  position: relative;
  width: 400px;
  height: 381px;
  padding: 50px 25px;
  text-align: center;
  background: #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.loginGroup {
  margin: 20px;
  padding: 10px 5px;
  border-bottom: 1px solid #1c4cff;
  text-align: left;
  position: relative;
}
.loginIcon {
  position: absolute;
  width: 30px;
  height: 30px;
  text-align: center;
}
.loginControl {
  border: none;
  outline: none;
  font-size: 20px;
  line-height: 30px;
  vertical-align: middle;
  margin-left: 40px;
}
.showMsg {
  position: absolute;
  font-size: 12px;
  color: #fff;
  text-align: center;
  line-height: 20px;
  width: 100%;
  color: red;
  left: 0;
  top: 100px;
}

.loginBtn {
  display: block;
  width: 168px;
  /* line-height: 48px; */
  border-radius: 24px;
  text-align: center;
  background: #2d5afc;
  color: #fff;
  border: none;
  outline: none;
  margin: 50px auto;
  font-family: '微软雅黑 Bold', '微软雅黑 Regular', '微软雅黑';
  cursor: pointer;
  font-size: 18px;
}
.langLink {
  color: #1c4cff;
  font-size: 14px;
  cursor: pointer;
}
.codeBtn {
  position: absolute;
  right: 0;
  font-size: 14px;
  background-color: #2d5afc;
}

.codeBtnDisable {
  width: 90px;
  text-align: center;
  position: absolute;
  right: 0;
  height: 30px;
  border-radius: 3px;
  border: 1px solid #ccc;
  color: #ccc;
}
.loginBox .loginGroup .ivu-input {
  font-size: 20px;
  border: none;
}
.loginBox .loginGroup .ivu-input:focus {
  border-color: transparent;
  box-shadow: none;
}
.loginBox .loginGroup .ivu-input-group-prepend,
.ivu-input-group-append {
  border: none;
}
.clearfix {
  zoom: 1;
}
.clearfix:after {
  clear: both;
  display: block;
  content: '.';
  height: 0;
  visibility: hidden;
}
</style>
