"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import React, { useState } from "react";
import { PutProps, Todo } from "../types/type";
import { Controller, useForm } from "react-hook-form";
import { schema } from "../schema/DataSchema";
import { useTodoActions } from "../schema/Store";

const DeletePutButton: React.FC<PutProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(item.title);
  const [newContent, setNewContent] = useState(item.content);
  const { deleteTodo, putTodo } = useTodoActions();
  const updateTodo = (updatedTodo: Todo) => {
    putTodo(updatedTodo);
  };
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = () => {
    const data = { title: newTitle, content: newContent };

    const validation = schema.safeParse(data);
    if (validation.success) {
      updateTodo({ ...item, title: newTitle, content: newContent });
      setIsOpen(false);
      alert("수정완료 되었습니다!");
    }
  };
  if (isOpen) {
    return (
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {/* <Input
          className="w-[280px]"
          placeholder="제목"
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
        /> */}

        <Controller
          name="title"
          control={control}
          rules={{
            required: "제목은 필수 입력 사항입니다.",
            minLength: {
              value: 1,
              message: "제목은 최소 1자 이상 입력해야합니다.",
            },
            maxLength: {
              value: 15,
              message: "제목은 최대 15자까지 입력 가능합니다.",
            },
          }}
          render={({ field }) => (
            <div>
              <Input
                {...field}
                // value={field.value || ""}
                value={newTitle}
                placeholder="제목을 입력하세요."
                onChange={(e) => {
                  setNewTitle(e.target.value);
                  field.onChange(e.target.value);
                }}
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

        {/* <Input
          className="w-[280px]"
          placeholder="내용"
          onChange={(e) => setNewContent(e.target.value)}
          value={newContent}
        /> */}

        <Controller
          name="content"
          control={control}
          rules={{
            required: "내용은 필수 입력 사항입니다.",
            minLength: {
              value: 5,
              message: "내용은 최소 5자 이상 입력해야합니다.",
            },
            maxLength: {
              value: 10,
              message: "내용은 최대 20자까지 입력 가능합니다.",
            },
          }}
          render={({ field }) => (
            <div className="">
              <Input
                {...field}
                value={newContent}
                placeholder="내용을 입력하세요."
                onChange={(e) => {
                  setNewContent(e.target.value);
                  field.onChange(e.target.value);
                }}
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

        <Button className="w-[80px] mx-1 mt-4" type="submit">
          수정완료
        </Button>

        <Button
          className="w-[90px] mx-1"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          취소
        </Button>
      </form>
    );
  } else {
    return (
      <>
        <Button
          className="w-[90px] mx-1"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          수정
        </Button>

        <Button
          className="w-[90px] mx-1 "
          type="button"
          onClick={() => {
            deleteTodo(item);
            alert("삭제 되었습니다!");
          }}
        >
          삭제
        </Button>
      </>
    );
  }
};

export default DeletePutButton;
