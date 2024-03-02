import type { OrderPre, AddressItem } from '@/types/order'
import { request } from '@/utils/request'

// 查询药品订单预支付信息
export const getMedicalOrderPre = (params: { prescriptionId: string }) =>
  request<OrderPre>('/patient/medicine/order/pre', 'GET', params)

// 获取收货地址列表
export const getAddressList = () =>
  request<AddressItem[]>('/patient/order/address')
