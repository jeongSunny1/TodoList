import React from "react";
import CustomDatePicker from "./@datepicker/page";
import DatePickerDemo from "./components/DatePickerDemo";
import DatePickerDemo2 from "./components/DatePickerDemo2";
import { ComboBox } from "./components/ComboBox";

export default function Home() {
  return (
    <div className="w-[100%] max-w-[1200px]	 h-[100vh] flex flex-col	items-center justify-center mx-auto	gap-2">
      <h2 className="text-red-300 text-5xl	font-semibold">Main Page</h2>
      <h2 className="text-red-300 text-3xl">환영합니다. 메인 페이지입니다.</h2>
      <ComboBox />
    </div>
  );
}
