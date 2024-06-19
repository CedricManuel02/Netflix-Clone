"use server";
import axios from "axios";
import { header } from "../utils/function";
export default async function getMovies(id: any, type: any) {
  const axiosConfig = {
    ...header,
    headers: {
      ...header.headers,
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  };

  const movie_logo_api = `https://api.themoviedb.org/3/${type}/${id}/images`;
  const movie_images_api = `https://api.themoviedb.org/3/${type}/${id}/images`;
  const movie_api = `https://api.themoviedb.org/3/${type}/${id}?language=en-US`;
  const movie_cast_api = `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`;
  const movie_videos_api = `https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`;

  var { data } = await axios.get(movie_api, axiosConfig);
  var { data: {cast} } = await axios.get(movie_cast_api, axiosConfig);
  var { data: { results }} = await axios.get(movie_videos_api, axiosConfig);
  var {data: { backdrops, posters }} = await axios.get(movie_images_api, axiosConfig);
  const {data: { logos: logos }} = await axios.get(movie_logo_api, axiosConfig);
  var logo = logos.filter((item: { iso_639_1: string }) => item.iso_639_1 == "en")[0]?.file_path;
  if (!logo) {
    logo = logos[0]?.file_path;
    if (!logo) logo = null;
  }
  return { data, logo, results, backdrops, posters, cast};
}
