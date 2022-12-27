export type TransactionModel = {
  id: string
  amount: number
  createdBy: string
  isRecurring: boolean
  deadline?: Date
  createdAt: Date
}

export class Transaction {
  constructor(
    private readonly transactionModel: TransactionModel,
  ) { }

  get id(): string {
    return this.transactionModel.id
  }

  get amount(): number {
    return this.transactionModel.amount
  }

  get createdBy(): string {
    return this.transactionModel.createdBy
  }

  get isRecurring(): boolean {
    return this.transactionModel.isRecurring
  }

  get deadline(): Date | undefined {
    return this.transactionModel.deadline
  }

  get createdAt(): Date {
    return this.transactionModel.createdAt
  }
}
