import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function authMiddleware(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  const token = localStorage.getItem('token')

  if (!token) {
    next({ path: '/', query: { message: 'Por favor, faça login para acessar esta página.' } })
    return
  }

  next()
}
