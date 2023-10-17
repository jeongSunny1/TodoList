"use client";

import React, { useState } from "react";
import DatePickerPopver from "./DatePickerPopver";

function DatePickerDemo2() {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");

  const onChageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  return (
    <>
      <h1>날짜만 있는 테스트</h1>
      <DatePickerPopver date={date} setDate={setDate} />
    </>
  );
}

export default DatePickerDemo2;
