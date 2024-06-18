"use server"
import axios from "axios"
import { header } from "../utils/function"
export default async function getLatestMovies (){

    const axiosConfig = {
        ...header,
        headers: {
          ...header.headers,
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      };

    const {data: {results}} = await axios.get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", axiosConfig)
  return {results};
}