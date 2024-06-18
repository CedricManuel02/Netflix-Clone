import React from "react";
import Grid from "./shared/Grid";
import getUpcomingMovies from "../api/getUpcomingMovies";
import Card from "./shared/Card";

export default async function UpcomingMovies() {
  const { results } = await getUpcomingMovies();
  return (
    <div className="h-auto w-full px-4 py-2 lg:px-10 xl:px-20">
      <header>
        <h3 className=" text-white font-medium text-md md:text-xl">
          Upcoming Movies
        </h3>
      </header>
      <Grid>
        {results &&
          results.map((movie: any) => (
            <Card
              key={movie.id}
              id={movie.id}
              type={"movie"}
              poster_path={movie.poster_path}
            />
          ))}
      </Grid>
    </div>
  );
}
