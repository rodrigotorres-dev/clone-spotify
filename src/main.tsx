import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './container/NavBar'
import Aside from './container/Aside'
import Content from './container/Content'
import Footer from './container/Footer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <main className='flex gap-2'>
      <Aside />
      <Content />
    </main>
    
      <Footer />
    
  </StrictMode>,
)
