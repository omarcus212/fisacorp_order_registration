export interface OrderItem {
  name: string,
  product_id: number | null,
  quantity: number | null,
  unit_price: string | number,
  img?: string
}

export interface OrderRequest {
  order_id: number,
  data: OrderItem[]
}

export interface Order {
  id: number | null,
  delivery_date: string,
  created_at: string,
  customer_id: number | null,
  name: string
}