import React, { useEffect, useState } from "react";
import CreateCard from "../Card/CreateCard";
import { config } from "../../App";
import axios from "axios";
import Grid from "@mui/material/Grid";
import styles from "./NewAlbums.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const NewAlbums = () => {
  const [data, setData] = useState([]);

  const filterData = async () => {
    try {
      let res = await axios.get(`${config.endpoint}/new`);
      setData(res.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    filterData();
  }, []);

  
  return (
    <div className={styles.container}>
      <Accordion defaultExpanded sx={{backgroundColor:"#121212"}}>
        <AccordionSummary
          className={styles.accordion_header}
          expandIcon="Show all"
          aria-controls="panel1-content"
          id="panel1-header"
        >
          New Albums
        </AccordionSummary>
        <AccordionDetails>
          <Grid container rowSpacing={2}>
            
            {data.map((item) => (
              <Grid item key={item.id} px={2} xs={6} s={4} md={3} lg={1.6}>
                <CreateCard item={item} />
              </Grid>
            ))}
            
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default NewAlbums;
