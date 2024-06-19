"use server";
import axios from "axios";
import { header } from "../utils/function";
export default async function getSimilarMovies({ id, type }: any) {
  const axiosConfig = {
    ...header,
    headers: {
      ...header.headers,
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  };
  const {
    data: { results },
  } = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}/similar?language=en-US&page=1`,
    axiosConfig
  );
  return { results };
}
