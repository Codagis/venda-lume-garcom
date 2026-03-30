import { apiFetch } from './api'

export async function searchProducts(filter = {}) {
  let url = '/products/search'
  if (filter.tenantId != null && filter.tenantId !== '') {
    const tenantId = typeof filter.tenantId === 'string' ? filter.tenantId : filter.tenantId
    url += `?tenantId=${encodeURIComponent(tenantId)}`
  }
  const body = { ...filter }
  delete body.tenantId
  const res = await apiFetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error('Erro ao buscar produtos.')
  return res.json()
}
