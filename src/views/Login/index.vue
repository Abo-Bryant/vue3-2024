<template>
  <div class="login-page">
    <cp-nav-bar @click-right="fn" title="登录" rightText="注册"></cp-nav-bar>
    <van-button>登录</van-button>
  </div>
</template>

<script setup lang="ts">
const fn = () => {
  console.log('fn')
}
</script>

<style lang="scss" scoped></style>
