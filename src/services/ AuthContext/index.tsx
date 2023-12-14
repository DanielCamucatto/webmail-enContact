// AuthProvider.tsx
import React, { createContext, useContext, ReactNode, useState } from 'react'

interface AuthProviderProps {
  children: ReactNode
}

interface AuthContextType {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  // Outros dados relacionados à autenticação, se necessário
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Inicializa como false
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Lógica de autenticação e outros estados aqui
  // Substitua isso pela lógica real de autenticação
  // Exemplo: setIsAuthenticated(true) após a autenticação bem-sucedida

  const value: AuthContextType = {
    isAuthenticated,
    setIsAuthenticated,
    // Outros dados relacionados à autenticação, se necessário
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}
