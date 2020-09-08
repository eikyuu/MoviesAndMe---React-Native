import axios from "axios";
const API_TOKEN = "8ba21661b4dc5983e27d082908fe2832";

export function getFilmsFromApiWithSearchedText(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    API_TOKEN +
    "&language=fr&query=" +
    text +
    "&page=" +
    page;
  return axios.get(url).then((response) => response.data);
}

// export function getFilmsFromApiWithSearchedText(text, page) {
//   const url =
//     "https://api.themoviedb.org/3/search/movie?api_key=" +
//     API_TOKEN +
//     "&language=fr&query=" +
//     text +
//     "&page=" +
//     page;
//   return fetch(url)
//     .then((response) => response.json())
//     .catch((error) => console.error(error));
// }
