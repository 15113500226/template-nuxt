<!--
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-01-14 09:28:35
 * @LastEditors: hzf
 * @LastEditTime: 2022-01-14 11:11:32
-->
<template>
  <div class="container_404 d_f jc_c ac_c ai_c fw_w">
    <img src="@s/images/img_404.png" />
    <div>
      <h1>{{error.statusCode}}</h1>
      <p>抱歉，你访问的{{title}}！</p>
      <el-button type="primary" @click="$router.push('/')" round>返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: ['error'],
  layout: 'page',
  head() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      title: this.error.statusCode == 404 ? '页面不存在' : '应用发生错误异常',
    };
  },
};
</script>

<style lang="scss" scoped>
.container_404 {
  width: 100vw;
  height: 100vh;
  > * {
    max-width: 100%;
  }
  > img {
    width: 500px;
    padding: 20px 50px;
  }
  > div {
    width: 500px;
    padding: 20px 50px;
    > h1 {
      font-size: 72px;
      font-weight: bold;
      color: #515a6e;
      margin: 0;
    }
    > p {
      font-size: 20px;
      color: #808695;
      margin: 20px 0;
    }
  }
}
</style>
