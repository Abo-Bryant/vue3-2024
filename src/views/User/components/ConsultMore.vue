<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  disabled?: boolean
}>()
const emit = defineEmits<{
  (e: 'on-preview'): void
  (e: 'on-delete'): void
}>()
// 更多操作
const showPopover = ref(false)
// 一个数据依赖另外一个数据的时候 就要想到计算属性
const actions = computed(() => [
  { text: '查看处方', disabled: props.disabled },
  { text: '删除订单' }
])
const onSelect = (action: { text: string }, i: number) => {
  if (i === 0) {
    // 查看处方
    emit('on-preview')
    // onShowPrescription(props.item.prescriptionId)
  }
  if (i === 1) {
    // 删除
    emit('on-delete')
    // deleteConsultOrder(props.item)
  }
}
</script>

<template>
  <div class="consult-more">
    <van-popover
      placement="top-start"
      v-model:show="showPopover"
      :actions="actions"
      @select="onSelect"
    >
      <template #reference> 更多 </template>
    </van-popover>
  </div>
</template>

<style lang="scss" scoped>
.consult-more {
  color: var(--cp-tag);
  flex: 1;
  font-size: 13px;
}
</style>
