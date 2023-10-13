"use client";

import React, { useState } from "react";
import DatePickerPopver from "./DatePickerPopver";
import dayjs from "dayjs";

function DatePickerDemo() {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");

  const onChageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const addTime = (date: Date | undefined, time: string) => {
    const hour = time ? time.split(":")[0] : "00";
    const minute = time ? time.split(":")[1] : "00";
    try {
      if (!dayjs(date ? date : "").isValid()) return undefined;

      return dayjs(date)
        .add(Number(hour), "h")
        .add(Number(minute), "m")
        .format();
    } catch {
      return undefined;
    }
  };
  console.log(addTime(date, time));
  console.log("date", date);
  console.log("time", time);

  return (
    <>
      <h1>테스트1</h1>

      <DatePickerPopver date={date} setDate={setDate} />
      <input
        type="time"
        className="w-[280px] border-2 rounded-lg p-3"
        onChange={onChageHandler}
      />
    </>
  );
}

export default DatePickerDemo;
