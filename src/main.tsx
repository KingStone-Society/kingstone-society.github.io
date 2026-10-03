import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// GitHub Pages 部署时，React 应用挂载在 /app.html
// 需要设置 basename 使路由正确工作
const basename = window.location.pathname.endsWith('.html')
  ? window.location.pathname
  : '/';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)