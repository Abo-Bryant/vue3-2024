<!-- <script setup lang="ts">
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

<style lang="scss" scoped></style> -->
<script setup lang="ts">
defineProps<{
  options: {
    label: string
    value: string | number
  }[]
  modelValue?: string | number
}>()
defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
</script>

<template>
  <div class="cp-radio-btn">
    <a
      class="item"
      href="javascript:;"
      v-for="item in options"
      :key="item.value"
      :class="{ active: modelValue === item.value }"
      @click="$emit('update:modelValue', item.value)"
    >
      {{ item.label }}
    </a>
    <!-- <a class="item" href="javascript:;">女</a> -->
  </div>
</template>

<style lang="scss" scoped>
.cp-radio-btn {
  display: flex;
  flex-wrap: wrap;
  .item {
    height: 32px;
    min-width: 60px;
    line-height: 30px;
    padding: 0 14px;
    text-align: center;
    border: 1px solid var(--cp-bg);
    background-color: var(--cp-bg);
    margin-right: 10px;
    box-sizing: border-box;
    color: var(--cp-text2);
    margin-bottom: 10px;
    border-radius: 4px;
    transition: all 0.3s;
    &.active {
      border-color: var(--cp-primary);
      background-color: var(--cp-plain);
    }
  }
}
</style>
