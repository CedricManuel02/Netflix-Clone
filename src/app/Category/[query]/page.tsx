"use client";
import getSearch from "@/app/action/getSearch";
import Card from "@/app/components/shared/Card";
import React, { useEffect, useState } from "react";

export default function Category({ params: { query } }: any) {
  const [data, setData] = useState<[]>([]);
  useEffect(() => {
    const data = async () => {
      const { results } = await getSearch({ query });
      setData(results);
    };
    data();
  }, [query]);

  const filteredData = data.filter(
    (result: any) =>
      result?.backdrop_path !== null && result.media_type !== "person"
  );

  return (
    <div className="min-h-screen h-auto py-32">
      <div className="h-auto w-full px-4 py-2 lg:px-10 xl:px-20 z-40 relative">
        <header className="py-4">
          <h3 className=" text-white font-medium text-md md:text-xl">
            {filteredData.length > 0
              ? `Search results for "${decodeURIComponent(
                  query.toUpperCase()
                )}"`
              : "There are no movies that matched your query."}
          </h3>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-2">
          {filteredData.map((results: any) => (
            <Card
              key={results?.id}
              id={results?.id}
              type={results?.media_type}
              poster_path={results?.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
