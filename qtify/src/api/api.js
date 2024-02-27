import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    let res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchNewAlbums = async () => {
  try {
    let res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchGenres = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
