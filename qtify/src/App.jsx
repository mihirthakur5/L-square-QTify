import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";
import Section from "./components/Section/Section";
import CreateCard from "./components/Card/CreateCard";

export const config = {
  endpoint: "https://qtify-backend-labs.crio.do",
};

function App() {
  // const [data, setData] = useState({});

  // const generateData = () => {
  //   source().then((data) => {
  //     setData((prevState) => {
  //       return { ...prevState, [key]: data };
  //     });
  //   });
  // };

  // useEffect(() => {
  //   generateData("topAlbums", fetchTopAlbums);
  //   generateData("newAlbums", fetchNewAlbums);
  //   generateData("songs", fetchSongs);
  // });

  // const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Hero
          value={`100 Thousand Songs, ad-free Over thousands podcast episodes`}
        />
        {/* <Carousel album={"top"} label={"Top Albums"} />
        <Carousel album={"new"} label={"New Albums"} /> */}
        {/* <Section album={"top"} label={"Songs"} /> */}
        <Section source={"top"} label={"Top Albums"} btn={true} />
        <Section source={"new"} label={"New Albums"} btn={true} />
        <div className="hr-line"></div>
        <Section label={"Songs"} tabs={true} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
