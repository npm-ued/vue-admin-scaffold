### 自定义表单展示卡片组件
> 旨在减少template中冗余标签，同时实现了动态配置表单功能

#### 支持表单组件有
* input
* textarea
* date
* image
* select

```
<template>
<CustomForm :title="'测试表单'" :dataArr="createObjArr" :model="createObj" :defaultSpan="24" :labelWidth="100"/>
</template>
<script>
import ykRule from '../../common/js/ykRule';
import ykConfig from '../../common/config/ykConfig';
import ImgUpload from '../../components/components/img-upload';
import { getDataFromConfig } from '../../common/js/share';
const createObjArr = [
  {
    label: '渠道姓名',
    key: 'channelContactName'
  },
  {
    label: '渠道电话',
    key: 'channelContactMobile'
  },
  {
    label: '渠道来源',
    key: 'channelSource'
  },
  {
    label: '状态设置',
    key: 'channelIsEnabled',
    type: 'select',
    options: ykConfig.channelIsEnabledList,
    verify: [
      {
        required: true,
        trigger: 'change'
      }
    ]
  },
  {
    label: '用款时间',
    key: 'dateTest',
    type: 'date'
  },
  {
    label: 'radio测试',
    key: 'radioTest',
    type: 'radio',
    options: [
      { name: '男', value: 0 },
      { name: '女', value: 1 }
    ]
  },
  {
    label: '备注',
    key: 'channelNotes',
    type: 'textarea',
    placeholder: ' '
  },
  {
    label: '照片',
    key: 'imageTest',
    type: 'image',
    imgKey: '',
    edit: true
  }
];
const createObj = getDataFromConfig(createObjArr); // 通过getDataFromConfig方法推导出模型对象
export default {
  name: 'billAddTest',
  components: {
    ImgUpload
  },
  data () {
    return {
      createObj,
      createObjArr
    }
  }
};
</script>
```
#### 字段含义
* dataArr（必填项） 表单项配置 数组类型
* model（必填项） 数据模型 对象类型
* title 自定义表单的标题，可以不为空
* defaultSpan 默认每一个表单元素占的栅格数，默认一行24格
* mode 当前表单状态【edit（编辑状态，默认值）、detail （详情状态不可编辑）】
* labelWidth 设置后label和input为左右结构，labelWidth即左侧label的宽度

