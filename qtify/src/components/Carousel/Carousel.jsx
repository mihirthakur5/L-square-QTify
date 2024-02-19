import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import CreateCard from "../Card/CreateCard";
import { config } from "../../App";
import styles from "./Carousel.module.css";
import SliderComp from "../Slider/SliderComp";

const Carousel = ({ album, label }) => {
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
        <div
          className={styles.songs_list}
        >
          {isOpen ? (
            <Grid container spacing={2}>
              {songs.map((song) => {
                return (
                  <Grid item key={song.id} xs={6} s={4} md={3} lg={1.5}>
                    <CreateCard item={song} />
                  </Grid>
                );
              })}
            </Grid>
          ): <SliderComp album={"top"} label={"Top Albums"}/>}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
