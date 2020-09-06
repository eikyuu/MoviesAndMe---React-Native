import axios from "axios";
const API_TOKEN = "8ba21661b4dc5983e27d082908fe2832";

function getFilmsFromApiWithSearchedText(text) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text;
  return axios.get(url).then((response) => response.data);
}

export default {
  getFilmsFromApiWithSearchedText,
};
