/**
 * Variáveis de ambiente do Create React App (prefixo obrigatório REACT_APP_*).
 * Defina em `.env`, `.env.local`, `.env.development` ou `.env.production`.
 * Reinicie o `npm start` após alterar.
 *
 * @see https://create-react-app.dev/docs/adding-custom-environment-variables/
 */

function trimTrailingSlashes(s) {
  return s.replace(/\/+$/, '')
}

/**
 * Base URL da API VendaLume-MS (inclua o path do contexto, ex.: `/api`).
 * Exemplos:
 * - Desenvolvimento com proxy: `/api`
 * - URL absoluta: `https://api.exemplo.com/api`
 */
export function getApiBaseUrl() {
  const raw =
    process.env.REACT_APP_API_URL ||
    process.env.REACT_APP_API_BASE_URL ||
    ''
  const trimmed = String(raw).trim()
  if (!trimmed) {
    return '/api'
  }
  return trimTrailingSlashes(trimmed)
}

export const API_BASE_URL = getApiBaseUrl()
