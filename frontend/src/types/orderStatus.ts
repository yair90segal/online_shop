const OrderStatus = {
  PENDING: 'pending',
  CANCELLED: 'cancelled',
  COMPLETED: 'completed',
} as const;

type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

export { OrderStatus };