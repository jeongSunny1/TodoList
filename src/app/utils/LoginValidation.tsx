"use client";
import React from "react";
import Input from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form";
import { Login } from "../types/type";
import { loginSchema } from "../schema/DataSchema";
import { useLoginStore } from "../schema/Store";
import Button from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";

function LoginValidation() {
  const loginCheck = useLoginStore((state) => state.loginCheck);
  const login = useLoginStore();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmitHandler = (data: any) => {
    let validation;
    try {
      validation = loginSchema.safeParse(data);
      const newTodo: Login = {
        id: Date.now(),
        email: data.email,
        password: data.password,
      };
      loginCheck(newTodo);
      reset();
    } catch (e) {
      console.log(e);
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
