import { StrictMode } from 'react'
import { Provider } from '@/components/ui/provider'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const rootElement = document.getElementById('root');
if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <Provider>
          <App />
      </Provider>
    </StrictMode>)
}
