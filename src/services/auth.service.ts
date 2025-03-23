import { API_BASE_URL, headers } from './config'

interface LoginCredentials {
  email: string
  password: string
}

interface SignUpData {
  name: string
  email: string
  password: string
}

interface AuthResponse {
  token: string
  user: {
    id: string
    name: string
    email: string
  }
}

class AuthService {
  private baseUrl = `${API_BASE_URL}/auth`

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/login`, {
        method: 'POST',
        headers,
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw new Error('Falha no login')
      }

      return response.json()
    } catch (error) {
      console.error('Erro no login:', error)
      throw error
    }
  }

  async signUp(data: SignUpData): Promise<AuthResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/register`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Falha no cadastro')
      }

      return response.json()
    } catch (error) {
      console.error('Erro no cadastro:', error)
      throw error
    }
  }

  async logout(): Promise<void> {
    try {
      const token = localStorage.getItem('token')
      if (!token) return

      await fetch(`${this.baseUrl}/logout`, {
        method: 'POST',
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      })

      localStorage.removeItem('token')
    } catch (error) {
      console.error('Erro no logout:', error)
      throw error
    }
  }
}

export const authService = new AuthService()
