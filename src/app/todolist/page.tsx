import React from "react";
import Form from "../@form/page";

function TodoList() {
  return (
    <div className="w-[100%] max-w-[1200px]	 h-[100vh] flex flex-col	items-center justify-center mx-auto	gap-2">
      <h2 className="text-red-300 text-5xl	font-semibold">TodoList</h2>
      <Form />
    </div>
  );
}

export default TodoList;
