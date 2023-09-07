"use client";
import React from "react";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { data: session, status } = useSession();

  const route = useRouter();

  const onClickRouter = () => {
    route.push("/");
  };

  return (
    <div className="max-w-[1200px] p-2 mx-auto">
      <div className="flex flex-row items-center justify-between">
        <Button type="button" className="mt-3" onClick={onClickRouter}>
          홈으로 가기
        </Button>
        {status === "authenticated" ? (
          // 로그인 한 상태
          <div className="flex flex-row items-center gap-3">
            <p className="mt-3">안녕하세요, {session?.user?.name}님!</p>
            <Image
              className="w-[30px] h-[30px] rounded-full mt-3"
              src={session?.user?.image || ""}
              alt="image"
              width={30}
              height={30}
            />
            <Button type="submit" className="mt-3" onClick={() => signOut()}>
              로그아웃
            </Button>
          </div>
        ) : (
          <div className="flex flex-row gap-3">
            <Button type="submit" className="mt-3" onClick={() => signIn()}>
              로그인
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
