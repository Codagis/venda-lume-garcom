function onlyDigits(v) {
  return (v ?? '').toString().replace(/\D/g, '')
}

export function maskPhoneBr(v) {
  const d = onlyDigits(v).slice(0, 11)
  if (!d) return ''
  const ddd = d.slice(0, 2)
  const rest = d.slice(2)
  if (d.length <= 2) return `(${ddd}`
  if (rest.length <= 4) return `(${ddd}) ${rest}`
  if (rest.length <= 8) {
    return `(${ddd}) ${rest.slice(0, 4)}-${rest.slice(4)}`
  }
  return `(${ddd}) ${rest.slice(0, 5)}-${rest.slice(5)}`
}

export function normalizePhone(v) {
  return maskPhoneBr(v)
}
