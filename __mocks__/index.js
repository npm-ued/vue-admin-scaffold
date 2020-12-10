const Mock = require('mockjs'); // mockjs 导入依赖模块
const bodyParser = require('body-parser');
const util = require('./util'); // 自定义工具模块
// 返回一个函数
module.exports = function (app) {
  // body 参数插件
  // app.use(bodyParser.json());
  // app.use(
  //   bodyParser.urlencoded({
  //     extended: true
  //   })
  // );
  // 监听http请求
  app.get('/user/userinfo', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./userInfo.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 监听http请求
  app.get('/test', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./test.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });
  // 用户列表
  app.post('/sail/v1/user/users', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./userList.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 审批结果
  app.get('/checkList', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./checkList.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 获取公共keyvalues
  app.get('/sail/v1/other/dicts', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./admindict.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 获取项目列表
  app.post('/sail/admin/v1/project/projects', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./projects.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 获取项目详情
  app.get('/sail/admin/v1/project/430000199012288752', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./projectDetail.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 订单记录
  app.post('/sail/v1/loan_order/loans_orders', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./orderList.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 订单详情
  app.get('/sail/v1/loan_order/430000199012288752', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./orderDetail.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 借款申请记录
  app.post('/sail/v1/loan_request/loan_requests', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./loanAuditList.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 订单详情
  app.get('/sail/v1/loan_request/430000199012288752', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./loanAuditDetail.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 还款流水
  app.post('/sail/v1/loan_order/repaymentlogs', function (rep, res) {
    // console.log('还款流水');
    // console.log(rep.query);
    // console.log(rep.body);
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象

    const json = util.getJsonFile('./repaymentlogs.json');
    // setTimeout(function () {
    //   res.json(Mock.mock(json));
    // }, 10000);
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 交易流水
  app.get('/sail/v1/loan_order/transactionlogs', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./transactionlogs.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 管理员用户列表
  app.get('/sail/v1/admin_user/admin_users', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./adminUsers.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 还款计划
  app.post('/sail/v1/loan_order/repayplans', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./repayPlans.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 发送验证码
  app.post('/sail/v1/admin_user/auth_code', function (rep, res) {
    res.json({
      code: 200,
      msg: '发送成功'
    });
  });

  // 查看所有权限
  app.get('/sail/v1/admin_user/permissions', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./permissions.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });

  // 查看所有角色
  app.get('/sail/v1/admin_user/roles', function (rep, res) {
    // 每次响应请求时读取mock data的json文件
    // util.getJsonFile方法定义了如何读取json文件并解析成数据对象
    const json = util.getJsonFile('./roles.json');
    // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
    res.json(Mock.mock(json));
  });
};
