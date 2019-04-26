import axios from "axios";

const KEY = "AIzaSyC4gy6mLTDF5fervBey2lQcvDWp56sJVAc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
