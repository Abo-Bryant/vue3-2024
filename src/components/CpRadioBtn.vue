<script setup lang="ts">
// 计数器 通过v-model 解析成 modelValue传值给子组件 @update:modelValue
// 自定义事件传值给父组件然后去进行值的修改,这样才能实现
defineProps<{
  count: number
}>()

defineEmits<{
  (e: 'update:count', count: number): void
}>()
</script>

<template>
  <div class="cp-radio-btn">计数器:{{ count }}</div>
  <button @click="$emit('update:count', count + 1)">+1</button>
</template>

<style lang="scss" scoped></style>
