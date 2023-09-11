"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useTodos } from "../schema/Store";

function Infinte() {
  const todos = useTodos();

  const { ref, inView } = useInView({ threshold: 0 });
  const { fetchNextPage, hasNextPage, data, isLoading, isFetching, error } =
    useInfiniteQuery({
      queryKey: ["people"],
      queryFn: async ({ pageParam = 1 }) => {
        const res = await fetch(
          `https://swapi.dev/api/people/?page=${pageParam}`
        ).then((res) => res.json());
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
    <>
      {todos?.map((item) => (
        <div key={item.id}>
          {item.title}
          {item.content}
        </div>
      ))}

      <div ref={ref} />
      {isFetching && <p>fetching...</p>}
    </>
  );
}

export default Infinte;
