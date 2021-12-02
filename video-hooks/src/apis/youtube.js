import axios from "axios";

const KEY = "AIzaSyAA_HggOphVs2jZx76cg50U-x5e8FKu1Tw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
