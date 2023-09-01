"use client";
import React from "react";
import Input from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Login } from "./types/type";
import { loginSchema } from "./schema/DataSchema";
import { useLoginStore } from "./schema/Store";
import Button from "@/components/ui/button";

function LoginValidation() {
  const loginCheck = useLoginStore((state) => state.loginCheck);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data: any) => {
    const validtion = loginSchema.safeParse(data);
    if (validtion.success) {
      const newTodo: Login = {
        id: Date.now(),
        email: data.email,
        password: data.password,
      };
      loginCheck(newTodo);
      reset();
    }
  };

  return (
    <form
      className=" flex flex-col items-center justify-center mx-auto m-3 "
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="flex gap-2 items-center m-3 mr-1">
        <p>이메일:</p>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "이메일은 필수 입력 사항입니다.",
            minLength: {
              value: 1,
              message: "이메일은 최소 1자 이상 입력해야합니다.",
            },
            maxLength: {
              value: 15,
              message: "이메일은 최대 15자까지 입력 가능합니다.",
            },
          }}
          render={({ field }) => (
            <div className="flex flex-col">
              <Input
                {...field}
                type="email"
                value={field.value || ""}
                placeholder="이메일을 입력하세요."
              />
              {errors.email && (
                <p className=" text-red-500 text-xs ">
                  {errors?.email?.message as string}
                </p>
              )}
            </div>
          )}
        />
      </div>
      <div className="flex gap-2 items-center m-3">
        <p>패스워드:</p>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "패스워드는 필수 입력 사항입니다.",
            minLength: {
              value: 8,
              message: "패스워드는 최소 8자 이상 입력해야합니다.",
            },
            maxLength: {
              value: 15,
              message: "패스워드는 최대 15자까지 입력 가능합니다.",
            },
          }}
          render={({ field }) => (
            <div className="flex flex-col">
              <Input
                {...field}
                type="password"
                value={field.value || ""}
                placeholder="패스워드를 입력하세요."
              />
              {errors.password && (
                <p className=" text-red-500 text-xs ">
                  {errors?.password?.message as string}
                </p>
              )}
            </div>
          )}
        />
      </div>
      <Button>회원가입</Button>
    </form>
  );
}

export default LoginValidation;
