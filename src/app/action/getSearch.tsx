"use server"
import axios from "axios";
import { header } from "../utils/function";

export default async function getSearch({ query }: { query: string }) {
  const axiosConfig = {
    ...header,
    headers: {
      ...header.headers,
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  };

  const response = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=1`, axiosConfig);
  const { results } = response.data;
  return { results };
}
