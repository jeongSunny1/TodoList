import React from "react";
import { DataProps } from "../types/type";
import DeletePutButton from "./DeletePutButton";

const Data: React.FC<DataProps> = ({ todoList, deleteTodo, updateTodo }) => {
  return (
    <div className="flex flex-wrap gap-5 w-[1095px] max-w-[1200px] h-[250px]">
      {todoList.map((item: any) => (
        <div
          key={item.id}
          className="w-[350px] h-[100%] border-slate-200 rounded-md p-4 
          text-center border-2 bg-indigo-100 flex flex-col justify-center items-center"
        >
          <p className="text-xl	font-medium	">제목: {item.title}</p>
          <p>내용: {item.content}</p>

          <div className="mt-3">
            <DeletePutButton
              item={item}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Data;
