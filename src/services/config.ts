export const API_BASE_URL = 'http://localhost:5000/api'

export const headers = {
  'Content-Type': 'application/json',
}

export const authHeaders = (token: string) => ({
  ...headers,
  Authorization: `Bearer ${token}`,
})
