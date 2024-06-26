"use server"
import axios from "axios"
import { header } from "../utils/function"
export default async function getNowPlaying (){

    const axiosConfig = {
        ...header,
        headers: {
          ...header.headers,
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      };

    const {data: {results}} = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", axiosConfig)
    if(results.length > 0) {
        const randomIndex = Math.floor(Math.random() * results.length)
        var movie = results[randomIndex]
        var {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`,axiosConfig);
        const {data : {logos : logos}} = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/images`, axiosConfig);
        var logo = logos.filter((item: { iso_639_1: string }) => item.iso_639_1 == "en")[0]?.file_path
        if (!logo) {
          logo = logos[0].file_path;
      }
    }
  return { data, logo }
}