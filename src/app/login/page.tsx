"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";
import { useLoginStore } from "../schema/Store";
import { Controller, useForm } from "react-hook-form";
import { loginSchema } from "../schema/DataSchema";
import { Login } from "../types/type";

function Login() {
  const route = useRouter();
  const loginCheck = useLoginStore((state) => state.loginCheck);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (data: any) => {
    console.log("data>", data);

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

  const onClickRouter = () => {
    route.push("/");
  };

  return (
    <div className="w-[100%] max-w-[1200px]	h-[100vh] flex flex-col	items-center justify-center	mx-auto">
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
        <div className="flex flex-row gap-3">
          <Button type="button" className="mt-3" onClick={onClickRouter}>
            홈으로 가기
          </Button>

          <Button type="submit" className="mt-3">
            로그인하기
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
