"use server"
import axios from "axios"
import { header } from "../utils/function"
export default async function getLatestTv (){

    const axiosConfig = {
        ...header,
        headers: {
          ...header.headers,
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      };

    const {data: {results}} = await axios.get("https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc", axiosConfig)
      
  return {results}
}