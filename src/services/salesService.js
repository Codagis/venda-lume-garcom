export const PAYMENT_METHOD_OPTIONS = [
  { value: 'CASH', label: 'Dinheiro' },
  { value: 'PIX', label: 'PIX' },
  { value: 'CREDIT_CARD', label: 'Cartão de crédito' },
  { value: 'DEBIT_CARD', label: 'Cartão de débito' },
  { value: 'BANK_TRANSFER', label: 'Transferência' },
  { value: 'MEAL_VOUCHER', label: 'Vale refeição' },
  { value: 'FOOD_VOUCHER', label: 'Vale alimentação' },
  { value: 'CHECK', label: 'Cheque' },
  { value: 'CREDIT', label: 'Crédito/Fiado' },
  { value: 'OTHER', label: 'Outro' },
]

export const PAYMENT_METHOD_OPTIONS_PDV = PAYMENT_METHOD_OPTIONS.filter((o) => o.value !== 'CREDIT' && o.value !== 'OTHER')
