"use server";
import axios from "axios";
import { header } from "../utils/function";
export default async function getPerson({id} : any) {
  const axiosConfig = {
    ...header,
    headers: {
      ...header.headers,
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  };
  const { data } = await axios.get(`https://api.themoviedb.org/3/person/${id}?language=en-US`,axiosConfig);
  const { data: {cast} } = await axios.get(`https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`,axiosConfig);
  return { data, cast };
}
