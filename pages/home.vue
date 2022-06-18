<!--
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-01-13 16:15:11
 * @LastEditors: hzf
 * @LastEditTime: 2022-01-14 17:19:37
-->
<template>
  <div>
    首页
    <p>{{stringValue1}}</p>
    <p>{{stringValue2}}</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  head() {
    return {
      title: '首页',
      meta: [
        { hid: 'keywords', name: 'keywords', content: '首页关键词' },
        { hid: 'description', name: 'description', content: '这是首页啊' },
      ]
    };
  },
  async asyncData({ $axios }) {
    const reslut = {
      stringValue1: '',
      stringValue2: '',
    };
    await $axios.all([
      $axios.get('/api/userSystem/common/captcha'),
      $axios.get('/api/userSystem/common/captcha'),
    ]).then($axios.spread((...args) => {
      if (args[0].code == 200) {
        reslut.stringValue1 = '接口一：' + args[0].data.stringValue;
      }
      if (args[1].code == 200) {
        reslut.stringValue2 = '接口二：' + args[1].data.stringValue;
      }
    }));

    return reslut;
  },
};
</script>

<style scoped lang="scss">

</style>
