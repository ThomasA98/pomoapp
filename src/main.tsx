import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import { ViewProvider } from './context/index.ts'

import './css/normalize.css'
import './index.css'

createRoot(document.getElementById('root')!)
.render(
  <React.StrictMode>
    <ViewProvider>
      <App />
    </ViewProvider>
  </React.StrictMode>
)
