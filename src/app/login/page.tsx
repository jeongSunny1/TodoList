"use client";

import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";

function Login() {
  const route = useRouter();
  //   const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  //     // e.preventdefault();
  //   };
  const onClickRouter = () => {
    route.push("/");
  };
  return (
    <div className="w-[100%] max-w-[1200px]	h-[100vh] flex flex-col	items-center justify-center	mx-auto">
      <div className=" flex flex-col items-center justify-center mx-auto m-3 ">
        <div className="flex gap-2 items-center m-3 mr-1">
          <p>이메일:</p>
          <Input type="email" placeholder="이메일을 입력하세요." />
        </div>
        <div className="flex gap-2 items-center m-3">
          <p>패스워드:</p>
          <Input type="password" placeholder="패스워드를 입력하세요." />
        </div>
        <div className="flex flex-row gap-3">
          <Button type="button" className="mt-3" onClick={onClickRouter}>
            홈으로 가기
          </Button>

          <Button type="submit" className="mt-3">
            로그인하기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
