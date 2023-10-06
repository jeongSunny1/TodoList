"use client";

import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
const OffCanvas = () => {
  return (
    <div className="border-r-2 w-[180px] p-9">
      <h1 className="font-bold text-2xl">목록</h1>

      <div className="flex flex-col gap-2 mt-5">
        <button>
          <Sheet>
            <SheetTrigger className="mr-10 text-lg ">TodoList</SheetTrigger>

            <SheetContent className="w-[280px] ml-[180px]" side="left">
              <SheetHeader>
                <SheetTitle className="font-bold text-2xl mt-[75px]">
                  부목록1
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-3">
                    <Link href="/todolist" className="text-lg">
                      TodoList
                    </Link>
                    <Link href="/infinite" className="text-lg">
                      Infinite
                    </Link>
                    <Link href="/table" className="text-lg">
                      Table
                    </Link>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </button>
      </div>
    </div>
  );
};

export default OffCanvas;
