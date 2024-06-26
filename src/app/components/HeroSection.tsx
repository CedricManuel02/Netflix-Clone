import Link from "next/link";
import React from "react";
import getNowPlaying from "../action/getNowPlaying";
import {
  BACKDROP_PATH,
  MOVIE_OVERVIEW_LENGHT,
  POSTER_PATH,
} from "../constant/constant";
import { Activity } from "lucide-react";
import { formatRuntime } from "../utils/function";
export default async function HeroSection() {
  const { data, logo }: any = await getNowPlaying()
  return (
    <div className="w-full h-auto lg:h-screen">
      <div className="w-full absolute h-64 sm:h-64 md:h-96 lg:h-screen xl:h-screen 2xl:h-screen">
        <div className="w-full h-full z-20 before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[rgba(0,0,0,0.7)] before:opacity-60 after:contents[''] after:absolute after:w-full after:h-full after:bottom-0 after:left-0 after:bg-gradient-to-t from-black to-transparent absolute"></div>
        <img
          className="w-full h-full object-cover opacity-55 absolute "
          src={`${BACKDROP_PATH}${data?.backdrop_path}`}
          alt="Back Drop"
        />
      </div>
      <div className="relative py-20 z-20 w-full px-5 text-sm sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base  lg:px-10 xl:px-20 2xl:px-20">
        <div className="flex flex-col justify-center z-20 pt-20">
          <img
            className="w-7/12 h-44 lg:h-80 xl:h-80 bg-blend-darken object-contain m-auto sm:m-auto md:m-auto lg:m-0 xl:m-0 2xl:m-0 md:w-6/12 lg:w-4/12 xl:w-4/12 2xl:w-4/12 py-10 "
            src={`${POSTER_PATH}${logo}`}
            alt="Logo"
          />
          <div className="text-slate-300 flex items-center flex-wrap text-xs justify-start gap-2 py-2">
            <p>
              {data.release_date && new Date(data?.release_date).getFullYear()}
            </p>
            <span>|</span>
            <div className="flex items-center justify-center gap-2">
              {data?.genres.map((genre: any) => genre.name).join(" ∘ ")}
            </div>
            <span>|</span>
            <p className="text-wrap">{formatRuntime(data?.runtime)}</p>
          </div>
          <div className="flex items-center gap-4 py-2 text-slate-300">
            <div className="flex items-center gap-2">
              <Link href={`https://www.imdb.com/title/${data?.imdb_id}`}>
                <img
                  className="w-9 object-cover"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                  alt="IMDB logo"
                />
              </Link>
              
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`https://www.themoviedb.org/movie/${
                  data?.id
                }-${data?.original_title
                  ?.toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`}
              >
                <img
                  className="w-20 object-cover"
                  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                  alt="TMDB logo"
                />
              </Link>
              <p className="font-medium">{data?.vote_average.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-center gap-2">
                <Activity size={15} className="text-yellow-500"/>
                <p className="font-medium">{data?.vote_count}</p>
              </div>
          </div>
          <p className="text-slate-400 w-full sm:w-full md:w-full lg:w-5/12 xl:w-5/12 2xl:w-5/12">
            {data && data?.overview.length > MOVIE_OVERVIEW_LENGHT
              ? `${data?.overview.slice(0, MOVIE_OVERVIEW_LENGHT)}...`
              : data?.overview}
          </p>
          <a href={`/Info/movie/${data?.id}`} className="btn btn-outline text-white w-full my-10  sm:w-44">
            Details
          </a>
        </div>
      </div>
    </div>
  );
}
