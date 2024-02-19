import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import CreateCard from "../Card/CreateCard";
import Slider from "react-slick";
import { config } from "../../App";
import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestCarousel = ({ album, label }) => {
  const [songs, setSongs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const fetchSongs = async () => {
    try {
      const res = await axios.get(`${config.endpoint}/${album}`);
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
    slidesToShow: 9,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

  useEffect(() => {
    fetchSongs(`${config.endpoint}/${album}`);
  }, []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.accordion}>
        <div className={styles.header}>
          <span>{label}</span>
          <button onClick={toggle}>{isOpen ? "Collapse" : "Show all"}</button>
        </div>
        <div className={styles.songs_list}>
          {isOpen ? (
            <Grid container spacing={2}>
              {songs.map((song) => {
                return (
                  <Grid item key={song.id} xs={6} md={3} lg={1.5}>
                    <CreateCard item={song} />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <div className={styles["slider-container"]}>
              <Slider {...settings}>
                {songs.map((song, idx) => {
                  return (
                    <div key={idx}>
                      <CreateCard item={song} />
                    </div>
                  );
                })}
              </Slider>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestCarousel;

