import './App.css'
import CreateCard from './components/Card/CreateCard'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { StyledEngineProvider } from '@mui/material'
import TopAlbums from './components/TopAlbums/TopAlbums'
import NewAlbums from './components/NewAlbums/NewAlbums'

export const config = {
  endpoint: `https://qtify-backend-labs.crio.do/albums`
};

function App() {
  

  return (
    <>
    <StyledEngineProvider injectFirst>
    <Navbar/>
    <Hero />
    {/* <CreateCard/> */}
    <TopAlbums/>
    <NewAlbums/>
    </StyledEngineProvider>
    </>
  )
}

export default App;
