import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import { ViewProvider, AiProvider, MkProvider, PomoProvider } from './context'

import './css/normalize.css'
import './index.css'

createRoot(document.getElementById('root')!)
.render(
  <React.StrictMode>
    <PomoProvider>
      <AiProvider>
        <MkProvider>
          <ViewProvider>
            <App />
          </ViewProvider>
        </MkProvider>
      </AiProvider>
    </PomoProvider>
  </React.StrictMode>
)
