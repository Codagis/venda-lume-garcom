const ACCESS_KEY = 'vendalume_garcom_access_token'
const REFRESH_KEY = 'vendalume_garcom_refresh_token'

export const AUTH_CLIENT = 'garcom'
export const AUTH_CLIENT_HEADER = 'X-VendaLume-Auth-Client'

export function getAccessToken() {
  return localStorage.getItem(ACCESS_KEY)
}

export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY)
}

export function setTokens(accessToken, refreshToken) {
  if (accessToken) {
    localStorage.setItem(ACCESS_KEY, accessToken)
  } else {
    localStorage.removeItem(ACCESS_KEY)
  }
  if (refreshToken) {
    localStorage.setItem(REFRESH_KEY, refreshToken)
  } else {
    localStorage.removeItem(REFRESH_KEY)
  }
}

export function clearTokens() {
  localStorage.removeItem(ACCESS_KEY)
  localStorage.removeItem(REFRESH_KEY)
}

export function hasStoredSession() {
  return Boolean(getAccessToken() || getRefreshToken())
}
