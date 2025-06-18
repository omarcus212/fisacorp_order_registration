export interface OrderItem {
  name: string,
  product_id: number,
  quantity: number,
  unit_price: string | number,
  img?: string
}

export interface OrderRequest {
  order_id: string,
  data: OrderItem[]
}

export interface Order {
  id: number,
  delivery_date: string,
  created_at: string,
  customer_id: number,
  name: string
}