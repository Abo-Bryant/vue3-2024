import type { ConsultType } from '@/enums'
import type { PartialConsult } from '@/types/consult'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConsultStore = defineStore(
  'cp-consult',
  () => {
    const consult = ref<PartialConsult>({})
    // 设置问诊类型
    const setType = (type: ConsultType) => {
      console.log('type', type)
      consult.value.type = type
    }
    // 设置极速问诊类型
    const setIllnessType = (type: 0 | 1) => (consult.value.illnessType = type)
    return {
      consult,
      setType,
      setIllnessType
    }
  },
  {
    persist: true
  }
)
