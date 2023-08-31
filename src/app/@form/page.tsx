"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import React, { FormEvent, useState } from "react";
import { create } from "zustand";
import Data from "../@data/page";
import { Controller, useForm } from "react-hook-form";
import { schema } from "../schema/DataSchema";
import { Actions, State, Todo, TodoData } from "../types/type";

/////////////////////zustand/////////////////
const useTodoStore = create<State & Actions>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (todo) =>
    set((state) => ({
      todos: state.todos.filter((item) => item.id !== todo.id),
    })),
  putTodo: (updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((item) =>
        item.id === updatedTodo.id ? updatedTodo : item
      ),
    })),
}));
/////////////////////zustand/////////////////

function Form() {
  const addTodo = useTodoStore((state) => state.addTodo);
  const putTodo = useTodoStore((state) => state.putTodo);
  const todos = useTodoStore();
  const todoList = todos.todos;

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  console.log("errors>", errors);

  const onSubmitHandler = (data: TodoData) => {
    console.log(data);

    const validtion = schema.safeParse(data);
    if (validtion.success) {
      const newTodo: Todo = {
        id: Date.now(),
        title: data.title,
        content: data.content,
      };
      addTodo(newTodo);
      reset();
    }
  };

  const updateTodo = (updatedTodo: Todo) => {
    putTodo(updatedTodo);
  };

  return (
    <div>
      <form
        className=" flex flex-col	items-center justify-center	 mx-auto m-3 "
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="flex gap-2 items-center m-3 ">
          <p>제목:</p>

          <Controller
            name="title"
            control={control}
            rules={{ required: "15자 이내로 입력하세요." }}
            render={({ field }) => (
              <div className="flex flex-col">
                <Input
                  {...field}
                  placeholder="내용을 입력하세요."
                  className="w-[255px]"
                />
                {errors.title && (
                  <p className=" text-red-500 text-xs ">
                    {errors?.title?.message as string}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <div className="flex gap-2 items-center m-3">
          <p>내용:</p>
          <Controller
            name="content"
            control={control}
            rules={{ required: "5자~20자 이내로 입력하세요." }}
            render={({ field }) => (
              <div className="flex flex-col">
                <Input
                  {...field}
                  placeholder="내용을 입력하세요."
                  className="w-[255px]"
                />
                {errors.content && (
                  <p className=" text-red-500 text-xs ">
                    {errors?.content?.message as string}
                  </p>
                )}
              </div>
            )}
          />
        </div>
        <Button className="w-[255px] m-3">확인</Button>
      </form>
      <Data
        todoList={todoList}
        deleteTodo={todos.deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default Form;
