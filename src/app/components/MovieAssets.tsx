"use client";
import React, { useRef, useState } from "react";
import Grid from "./shared/Grid";
import { BACKDROP_PATH, NAME_LENGTH, POSTER_NO_IMAGE, POSTER_PATH } from "../constant/constant";
import { Activity, Play } from "lucide-react";
import Link from "next/link";

export default function MovieAssets({ posters, backdrops, results, cast }: any) {
  const [index, setIndex] = useState<Number>(0);
  const [video, setVideo] = useState<String>();
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const handleClick = (event: any) => {
    if (modalRef.current && event) {
      setVideo(event);
      modalRef.current.showModal();
    }
  };
  return (
    <div className="h-auto w-full px-4 lg:px-10 xl:px-20 relative z-20">
      <div className="flex items-center gap-2 flex-wrap">
      {cast.length > 0 ? (
          <button
            className={`btn flex-grow md:flex-grow-0 ${index === 0 ? "btn-default" : " btn-outline"}`}
            onClick={() => setIndex(0)}
          >
            Cast
          </button>
        ) : null}
        {posters.length > 0 ? (
          <button
            className={`btn flex-grow md:flex-grow-0 ${index === 1 ? "btn-default" : " btn-outline"}`}
            onClick={() => setIndex(1)}
          >
            Posters
          </button>
        ) : null}
        {backdrops.length > 0 ? (
          <button
            className={`btn flex-grow md:flex-grow-0 ${index === 2 ? "btn-default" : " btn-outline"}`}
            onClick={() => setIndex(2)}
          >
            Backdrops
          </button>
        ) : null}
        {results.length > 0 ? (
          <button
            className={`btn flex-grow md:flex-grow-0 ${index === 3 ? "btn-default" : " btn-outline"}`}
            onClick={() => setIndex(3)}
          >
            Videos
          </button>
        ) : null}
      </div>
      <Grid>
        {index === 0 ? 
          cast &&
            cast.map((cast: any) => (
              <Link
                href={`/Person/${cast.id}`}
                key={cast.id}
                className="cursor-pointer h-full rounded-sm min-w-36 lg:min-w-56 group "
              >
                <img
                  className="rounded-sm w-full h-44 lg:h-80 object-cover transition-all duration-200 delay-100 group-hover:grayscale"
                  src={
                    cast?.profile_path
                      ? `${POSTER_PATH}${cast.profile_path}`
                      : POSTER_NO_IMAGE
                  }
                  alt={cast?.profile_path}
                />
                <figcaption className="flex flex-col py-2">
                  <h3 className="text-sm">
                    {cast?.original_name.length > NAME_LENGTH
                      ? `${cast?.original_name.slice(0, NAME_LENGTH)}...`
                      : cast?.original_name}
                  </h3>
                  <small className="text-slate-400 h-10">
                    {cast?.character}
                  </small>
                  <div className="flex items-center justify-between text-xs lg:text-sm text-white font-medium">
                    <p>{cast?.known_for_department}</p>
                    <span className="flex items-center justify-center gap-2">
                      <Activity size={15} className="text-yellow-500 " />
                      <p>{cast?.popularity.toFixed(2)}</p>
                    </span>
                  </div>
                </figcaption>
              </Link>
            ))
          : index === 1 ? posters &&
            posters.map(({ file_path }: any) => (
              <div
                key={file_path}
                className="h-56 min-w-36 lg:min-w-56 lg:h-80 relative flex items-center justify-center border border-slate-400"
              >
                <img
                  className="w-full h-full object-cover absolute left-0 top-0"
                  src={`${BACKDROP_PATH}${file_path}`}
                  alt={file_path}
                  loading="lazy"
                />
              </div>
            ))
          : index === 2
          ? backdrops &&
            backdrops.map(({ file_path }: any) => (
              <div
                key={file_path}
                className="min-w-56 h-32 lg:min-w-96 lg:h-52 relative flex items-center justify-center border border-slate-400"
              >
                <img
                  className="w-full h-full object-cover absolute left-0 top-0"
                  src={`${BACKDROP_PATH}${file_path}`}
                  alt={file_path}
                  loading="lazy"
                />
              </div>
            ))
          : results &&
            results
              .filter((results: any) => results.site === "YouTube")
              .map((result: any) => (
                <div
                  key={result?.key}
                  className="min-w-56 h-32 lg:min-w-96 lg:h-52 relative flex items-center justify-center border border-slate-400"
                >
                  <Play
                    size={44}
                    onClick={() => handleClick(result?.key)}
                    className="text-white relative z-20 bg-black rounded-full p-2 opacity-55 hover:opacity-90 cursor-pointer hover:scale-[0.9]"
                  />

                  <img
                    className="w-full h-full object-cover absolute left-0 top-0"
                    src={`https://img.youtube.com/vi/${result?.key}/0.jpg`}
                    alt={result?.key}
                    loading="lazy"
                  />
                </div>
              ))}
      </Grid>
      <dialog id="my_modal_3" className="modal" ref={modalRef}>
        <div className="modal-box p-0 border border-slate-300">
          <form method="dialog">
            <button
              onClick={() => setVideo("")}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          {video ? (
            <iframe
              className="w-full"
              height="315"
              src={`https://www.youtube.com/embed/${video}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : null}
        </div>
      </dialog>
    </div>
  );
}
