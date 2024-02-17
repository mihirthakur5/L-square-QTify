import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'

function App() {
  

  return (
    <>
    <StyledEngineProvider injectFirst>
    <Navbar/>
    <Hero />
    </StyledEngineProvider>
    </>
  )
}

export default App
