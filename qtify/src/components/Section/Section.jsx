import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import CreateCard from "../Card/CreateCard";
import { config } from "../../App";
import Slider from "react-slick";
import styles from "./Section.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GenreTabs from "../Tabs/GenreTabs";
import { Tab, Tabs } from "@mui/material";

const Section = ({ source, label, tabs, btn }) => {
  const [albums, setAlbums] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [songs, setSongs] = useState([]);
  const [filtersongs, setFiltersongs] = useState([]);
  const [genre, setGenre] = useState([]);
  const [value, setValue] = useState(0);

  const fetchFilters = async () => {
    try {
      const res = await axios.get(`${config.endpoint}/genres`);
      setGenre(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchSongs = async () => {
    try {
      const res = await axios.get(`${config.endpoint}/songs`);
      setSongs(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchAlbums = async () => {
    try {
      const res = await axios.get(`${config.endpoint}/albums/${source}`);
      setAlbums(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const filterSongs = (value) => {
    if (value === "all") {
      setFiltersongs(songs);
    } else {
      const res = songs.filter((data) => data.genre.key === value);
      setFiltersongs(res);
    }
  };

  const handleChangeSongs = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      filterSongs("all");
    } else {
      filterSongs(genre.data[newValue - 1].key);
    }
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const collapseCard = () => {
    return (
      <Grid container spacing={2}>
        {albums.map((song) => {
          return (
            <Grid item key={song.id} xs={6} md={3} lg={1.5}>
              <CreateCard item={song} />
            </Grid>
          );
        })}
      </Grid>
    );
  };

  const sliderCard = () => {
    return (
      <div className={styles.slider_container}>
        <Slider {...settings}>
          {albums.map((song) => {
            return (
              <div key={song.id}>
                <CreateCard item={song} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  };

  const tabsSection = () => {
    return (
      <div className={styles.tabSection}>
        <Tabs
          value={value}
          onChange={handleChangeSongs}
          aria-label="icon label tabs example"
        >
          <Tab label="All" style={{ color: "#ffff" }} value={0} />
          {genre.length !== 0 &&
            genre.data.map((res, index) => (
              <Tab
                key={res.key}
                label={res.label}
                style={{ color: "#ffff" }}
                value={index + 1}
              />
            ))}
        </Tabs>
        <div className={styles.slider_container}>
          <Slider {...settings}>
            {filtersongs.map((song) => {
              return (
                <div key={song.id}>
                  <CreateCard item={song} children={true} />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetchAlbums();
    fetchSongs();
    fetchFilters();
    setFiltersongs(songs);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.accordion}>
        <div className={styles.header}>
          <h1>{label}</h1>
          {btn && (
            <button onClick={toggle}>{isOpen ? "Collapse" : "Show all"}</button>
          )}
        </div>
        {tabs ? (
          tabsSection()
        ) : (
          <div className={styles.songs_list}>
            {isOpen ? collapseCard() : sliderCard()}
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
