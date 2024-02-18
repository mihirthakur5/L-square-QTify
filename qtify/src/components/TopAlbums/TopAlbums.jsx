import React, { useEffect, useState } from 'react';
import CreateCard from '../Card/CreateCard';
import { config } from '../../App';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from './TopAlbums.module.css'
import { Grow } from '@mui/material';

const TopAlbums = () => {

    const [data, setData] = useState([]);

    const filterData = async() => {
        try{
            let res = await axios.get(`${config.endpoint}/top`)
            setData(res.data)
        }   
        catch (error){
            console.log(error.response.data.message);
        }
    };

    useEffect(() => {
        filterData();
    }, []);



  return (
    <div className={styles.container}>
        <div className={styles.heading}>
            <p>Top Albums</p>
            <a>Show all</a>
        </div>
        <Grid container rowSpacing={2}>
            {data.map((item) =>(
                <Grid item key={item.id} xs={6} md={3} lg={1.7}>
                    <CreateCard item={item}/>
                </Grid>
            ))}
        </Grid>
    </div>
  );
}

export default TopAlbums;