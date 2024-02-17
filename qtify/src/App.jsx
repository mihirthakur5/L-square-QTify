import './App.css'
import Navbar from './components/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'

function App() {
  

  return (
    <>
    <StyledEngineProvider injectFirst>
    <Navbar/>

    </StyledEngineProvider>
      
    </>
  )
}

export default App
