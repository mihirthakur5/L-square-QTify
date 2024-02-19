import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { config } from "../../App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CreateCard from "../Card/CreateCard";
import styles from './Slider.module.css'

const SliderComp = ({album}) => {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const res = await axios.get(`${config.endpoint}/${album}`);
      setSongs(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 2,
    initialSlide: 1,
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
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div className={styles["slider-container"]}>
      <Slider {...settings}>
        {songs.map((song, idx) =>{
          return (
            <div key={idx}>
            <CreateCard item={song}/>
            </div>
          )
        })}
      </Slider>
    </div>
  );
};

export default SliderComp;
