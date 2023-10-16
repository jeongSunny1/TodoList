"use client";
import React from "react";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();

  const route = useRouter();

  const onClickRouter = () => {
    route.push("/");
  };

  return (
    <div className="max-w-[1480px] p-2 mx-auto border">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-5">
          <Sheet>
            <SheetTrigger>LOGO</SheetTrigger>
            <SheetContent className="w-[200px] sm:w-[140px]" side="left">
              <SheetHeader>
                <SheetTitle className="font-bold text-2xl mt-10">
                  목록
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-2">
                    <Link href="/todolist" className="text-lg">
                      TodoList
                    </Link>
                    <Link href="/infinite" className="text-lg">
                      Infinite
                    </Link>
                    <Link href="/table" className="text-lg">
                      Table
                    </Link>
                    <Link href="/video" className="text-lg">
                      Video
                    </Link>
                    <button>
                      <Sheet>
                        <SheetTrigger className="mr-10 text-lg">
                          Sheet
                        </SheetTrigger>
                        <SheetContent className="ml-[150px]" side="left">
                          <SheetHeader>
                            <SheetTitle className="font-bold text-2xl mt-10">
                              목록
                            </SheetTitle>
                            <SheetDescription>
                              <div className="flex flex-col gap-2">
                                <Link href="/todolist" className="text-lg">
                                  TodoList
                                </Link>
                                <Link href="/infinite" className="text-lg">
                                  Infinite
                                </Link>
                                <Link href="/table" className="text-lg">
                                  Table
                                </Link>
                                <Link href="/video" className="text-lg">
                                  Video
                                </Link>
                              </div>
                            </SheetDescription>
                          </SheetHeader>
                        </SheetContent>
                      </Sheet>
                    </button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Button type="button" onClick={onClickRouter}>
            홈으로 가기
          </Button>
        </div>
        {status === "authenticated" ? (
          // 로그인 한 상태
          <div className="flex flex-row items-center gap-3">
            <p>안녕하세요, {session?.user?.name}님!</p>
            <Image
              className="w-[30px] h-[30px] rounded-full mt-3"
              src={session?.user?.image || ""}
              alt="image"
              width={30}
              height={30}
            />
            <Button type="submit" onClick={() => signOut()}>
              로그아웃
            </Button>
          </div>
        ) : (
          <div className="flex flex-row gap-3">
            <Button type="submit" onClick={() => signIn()}>
              로그인
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
