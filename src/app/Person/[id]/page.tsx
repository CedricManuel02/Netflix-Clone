import getPerson from "@/app/action/getPerson";
import LatestMovies from "@/app/components/LatestMovies";
import Card from "@/app/components/shared/Card";
import Grid from "@/app/components/shared/Grid";
import { POSTER_PATH } from "@/app/constant/constant";
import { Activity } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function page({ params: { id } }: any) {
  const { data, cast } = await getPerson({ id });
  return (
    <div className="w-full min-h-screen h-auto">
      <div className="h-auto w-full flex items-center justify-start px-2 lg:px-10 xl:px-20 relative z-20">
        <div className="hero my-auto py-20">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              src={`${POSTER_PATH}${data?.profile_path}`}
              alt={data?.profile_path}
              loading="lazy"
              width={200}
              height={200}
              className="rounded-md"
            />
            <div>
              <h1 className="text-2xl font-bold">{data?.name}</h1>
              <p className="py-3 font-medium text-slate-400 text-justify text-sm lg:text-left lg:text-md">
                {data?.biography}
              </p>
              <div className="flex items-center justify-evenly flex-wrap bg-slate-800 rounded-md p-2">
                <div className="p-2 flex-grow">
                  <h3 className="font-semibold text-slate-500">Popularity</h3>
                  <div className="flex items-center gap-2">
                    <Activity size={15} className="text-yellow-500" />
                    <p className="font-medium text-slate-300">
                      {data?.popularity === 0 ? "N/A" : data?.popularity}
                    </p>
                  </div>
                </div>
                <div className="p-2 flex-grow">
                  <h3 className="font-semibold text-slate-500">Birthdate</h3>
                  <p className="font-medium text-slate-300">
                    {new Date(data?.birthday).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                    (
                    {new Date().getFullYear() -
                      new Date(data?.birthday).getFullYear()}
                    ) years old
                  </p>
                </div>
                <div className="p-2 flex-grow">
                  <h3 className="font-semibold text-slate-500">
                    Place of Birth
                  </h3>
                  <p className="font-medium text-slate-300">
                    {data?.place_of_birth}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto w-full px-4 py-2 lg:px-10 xl:px-20 z-40 relative">
        <header>
          <h3 className=" text-white font-medium text-md md:text-xl">
            Movies of {data?.name}
          </h3>
        </header>
        <Grid>
          {cast &&
            cast.map((movie: any) => (
              <Card
                key={movie.id}
                id={movie.id}
                type={"movie"}
                poster_path={movie.poster_path}
              />
            ))}
        </Grid>
      </div>
      <LatestMovies />
    </div>
  );
}
