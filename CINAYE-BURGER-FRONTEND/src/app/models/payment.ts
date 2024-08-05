export class Payment {
  id?: number;
  order_id!: number;
  amount!: number;
  paid_at!: string;
  created_at!: string;
}
