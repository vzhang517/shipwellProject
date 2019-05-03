import axios from "axios";

// It is not good practive to commit API keys. I would normally store this key in a proccess.env
// This was for simplicity sake in this particular case
const KEY = "AIzaSyC4gy6mLTDF5fervBey2lQcvDWp56sJVAc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
