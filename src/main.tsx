import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

import './index.css'
import { PomoProvider } from './modules/pomo'
import { AiProvider } from './modules/ai'
import { MkProvider } from './modules/markdown'
import { ViewProvider } from './modules/ui'

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
