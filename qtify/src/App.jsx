import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'
import Carousel from './components/Carousel/Carousel'


export const config = {
  endpoint: `https://qtify-backend-labs.crio.do/albums`
};

function App() {
  

  return (
    <>
    <StyledEngineProvider injectFirst>
    <Navbar/>
    <Hero />
    <Carousel album={"top"} label={"Top Albums"}/>
    <Carousel album={"new"} label={"New Albums"}/>
    </StyledEngineProvider>
    </>
  )
}

export default App;
