export interface OrderItem {
  name: string,
  product_id: string,
  quantity: string,
  unit_price: string,
  img?: string
}

export interface OrderRequest {
  order_id: string,
  data: OrderItem[]
}