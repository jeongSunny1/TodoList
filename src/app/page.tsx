import Button from "@/components/ui/button";
import Link from "next/link";
import { ButtonFont } from "./styles/font";

export default function Home() {
  return (
    <div className="w-[100%] max-w-[1200px]	 h-[100vh] flex flex-col	items-center justify-center mx-auto	gap-2">
      <h2 className="text-red-300 text-5xl	font-semibold">Main Page</h2>
      <h2 className="text-red-300 text-3xl">환영합니다. 메인 페이지입니다.</h2>

      {/* <div className="flex gap-2">
        <Link href="/todolist" className={`${ButtonFont}`}>
          TodoList
        </Link>
        <Link
          href="/infinite"
          className={`${ButtonFont} bg-yellow-200 hover:bg-yellow-400 `}
        >
          Infinite
        </Link>
        <Link
          href="/table"
          className={`${ButtonFont} bg-green-200 hover:bg-green-400 `}
        >
          Table
        </Link>
      </div> */}
    </div>
  );
}
