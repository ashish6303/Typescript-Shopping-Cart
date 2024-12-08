import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom'
import { ThemeContext } from "../src/context/ThemeContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeContext.Provider value="dark">
        <App />

      </ThemeContext.Provider>
      {/* <h1>Hii</h1> */}
    </BrowserRouter>
  </StrictMode>,
)
