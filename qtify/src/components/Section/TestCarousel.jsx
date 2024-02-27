import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import CreateCard from "../Card/CreateCard";
import { config } from "../../App";
import Slider from "react-slick";
import styles from "./Section.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SongSection = ({ songs, label }) => {
  const [songs, setSongs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchSongs = async () => {
    try {
      const res = await axios.get(
        `https://qtify-backend-labs.crio.do/${songs}`
      );
      setSongs(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const toggle = () => {
    setIsOpen(!isOpen);
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
        {songs.map((song) => {
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
          {songs.map((song) => {
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

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.accordion}>
        <div className={styles.header}>
          <span>{label}</span>
          <button onClick={toggle}>{isOpen ? "Collapse" : "Show all"}</button>
        </div>
        <div className={styles.songs_list}>
          {isOpen ? collapseCard() : sliderCard()}
        </div>
      </div>
    </section>
  );
};

export default SongSection;
