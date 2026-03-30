export function isValidEmail(v) {
  const s = (v ?? '').toString().trim()
  if (!s) return true
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

export function antdRuleEmail({ required = false, messageRequired = 'E-mail é obrigatório.' } = {}) {
  return {
    validator: async (_, value) => {
      const s = (value ?? '').toString().trim()
      if (!s) {
        if (required) throw new Error(messageRequired)
        return
      }
      if (!isValidEmail(s)) throw new Error('E-mail inválido.')
    },
  }
}
