// ProtectedRoute.tsx
import React from 'react'
import { Route, RouteProps, Navigate } from 'react-router-dom'

interface ProtectedRouteProps extends RouteProps {
  isAuthenticated: boolean
  redirectTo: string
  element: React.ReactNode // Adicione a propriedade 'element' à interface
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  redirectTo,
  element,
  ...rest
}) => {
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to={redirectTo} replace />
  )
}

export default ProtectedRoute
