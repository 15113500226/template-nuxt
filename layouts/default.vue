<!--
 * @Descripttion:
 * @version:
 * @Author: hzf
 * @Date: 2022-01-14 09:24:06
 * @LastEditors: hzf
 * @LastEditTime: 2022-01-14 10:19:19
-->
<template>
  <div>
    <nuxt-link to="/home">首页</nuxt-link>
    <nuxt-link to="/about">关于我们</nuxt-link>

    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
};
</script>
