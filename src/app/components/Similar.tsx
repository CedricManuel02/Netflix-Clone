import React from "react";
import Grid from "./shared/Grid";
import Card from "./shared/Card";
import getSimilarMovies from "../action/getSimilarMovies";

export default async function Similar({id, type}: any) {
  const { results } = await getSimilarMovies({id, type});
  return (
    <React.Fragment>
      {results.length > 0 ? (
        <div className="h-auto w-full px-4 py-2 lg:px-10 xl:px-20 z-40 relative">
          <header>
            <h3 className=" text-white font-medium text-md md:text-xl">
              Similar Movies
            </h3>
          </header>
          <Grid>
            {results &&
              results.map((movie: any) => (
                <Card
                  key={movie.id}
                  id={movie.id}
                  type={type}
                  poster_path={movie.poster_path}
                />
              ))}
          </Grid>
        </div>
      ) : null}
    </React.Fragment>
  );
}
