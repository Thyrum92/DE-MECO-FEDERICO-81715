import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { CartProvider } from './context/CartProvider';
import { ToastProvider } from './context/ToastProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < ToastProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </ToastProvider>
  </StrictMode>,
)
