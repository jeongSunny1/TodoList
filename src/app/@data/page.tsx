"use client";
import React, { useEffect, useState } from "react";
import { DataProps } from "../types/type";
import DeletePutButton from "../utils/DeletePutButton";
import { Loading } from "./Loading";

const Data: React.FC<DataProps> = ({ todos }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-wrap gap-5 w-[1095px] max-w-[1200px] h-[250px]">
      {isLoading
        ? Array.from({ length: todos?.length }).map((_, index) => (
            <div
              key={index}
              className="w-[350px] h-[100%] border-slate-200 rounded-md p-4 text-center border-2 bg-indigo-100 flex flex-col justify-center items-center"
            >
              <Loading key={index} />
            </div>
          ))
        : todos.map((item: any) => (
            <div
              key={item.id}
              className="w-[350px] h-[100%] border-slate-200 rounded-md p-4
              text-center border-2 bg-indigo-100 flex flex-col justify-center items-center"
            >
              <p className="text-xl	font-medium	">제목: {item.title}</p>
              <p>내용: {item.content}</p>

              <div className="mt-3">
                <DeletePutButton item={item} />
              </div>
            </div>
          ))}
    </div>
  );
};

export default Data;
