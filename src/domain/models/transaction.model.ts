export type TransactionModel = {
  id: string
  amount: number
  createdBy: string
  isRecurring: boolean
  deadline?: Date
  createdAt: Date
}
