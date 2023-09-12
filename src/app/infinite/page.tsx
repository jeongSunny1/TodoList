"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";

function Infinite() {
  const { ref, inView } = useInView({ threshold: 0 });
  const { fetchNextPage, hasNextPage, data, isLoading, isFetching, error } =
    useInfiniteQuery({
      queryKey: ["people"],
      queryFn: async ({ pageParam = 1 }) => {
        const res = await fetch(
          `https://swapi.dev/api/people/?page=${pageParam}`
        ).then((res) => res.json());
        console.log("res", res);

        return { ...res, pageParam };
      },
      getNextPageParam: (lastPage) => lastPage.pageParam + 1,
    });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  if (isLoading) return <p>Loading....💫</p>;
  if (error) return <p>{error.toString()}</p>;
  return (
    <div className=" flex flex-col items-center justify-center mx-auto m-3">
      <h2 className="text-red-300 text-5xl font-semibold m-8">Infinite</h2>

      {data?.pages.map((page) =>
        page?.results?.map(
          ({
            name,
            height,
            skin_color,
            gender,
          }: {
            name: string;
            height: string;
            skin_color: string;
            gender: string;
          }) => (
            <div
              key={name}
              className="flex flex-col items-center border-4 gap-2 m-2 p-3 w-[300px] h-[250px] bg-yellow-200 rounded-lg text-center justify-center"
            >
              <h2>{name}</h2>
              <p>{height}</p>
              <p>{skin_color}</p>
              <p>{gender}</p>
            </div>
          )
        )
      )}

      <div ref={ref} />
      {isFetching && <p className="text-sm font-medium">Fetching...</p>}
    </div>
  );
}

export default Infinite;
