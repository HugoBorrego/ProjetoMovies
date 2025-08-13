import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GetMovie from "./components/GetMovie";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GetMovie />
  </StrictMode>,
)