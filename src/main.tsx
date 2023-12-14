// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// index.tsx ou App.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AuthProvider } from './services/ AuthContext' // Certifique-se de usar o caminho correto para AuthProvider

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
