import axios from "axios";
import { API_KEY } from "./env";

export default {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchSciFi: `/discover/tv?api_key=${API_KEY}&with_networks=878`,
  fetchWestern: `/discover/tv?api_key=${API_KEY}&with_networks=37`,
  fetchAnimation: `/discover/tv?api_key=${API_KEY}&with_networks=16`,
  fetchTV: `/discover/tv?api_key=${API_KEY}&with_networks=10770`,
};

// BASE URL
export const instance = axios.create({
  baseURL: "http://api.themoviedb.org/3",
});
