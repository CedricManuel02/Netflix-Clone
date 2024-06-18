"use client";
import React, { useRef, useState } from "react";
import Grid from "./shared/Grid";
import { BACKDROP_PATH } from "../constant/constant";
import { Play } from "lucide-react";

export default function MovieAssets({ posters, backdrops, results }: any) {
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
      <div className="flex items-center gap-2">
        {posters.length > 0 ? (
          <button
            className={`btn ${index === 0 ? "btn-default" : " btn-outline"}`}
            onClick={() => setIndex(0)}
          >
            Posters
          </button>
        ) : null}
        {backdrops.length > 0 ? (
          <button
            className={`btn ${index === 1 ? "btn-default" : " btn-outline"}`}
            onClick={() => setIndex(1)}
          >
            Backdrops
          </button>
        ) : null}
        {results.length > 0 ? (
          <button
            className={`btn ${index === 2 ? "btn-default" : " btn-outline"}`}
            onClick={() => setIndex(2)}
          >
            Videos
          </button>
        ) : null}
      </div>
      <Grid>
        {index === 0
          ? posters &&
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
          : index === 1
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
