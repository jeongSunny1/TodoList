"use client";

import React, { useState } from "react";

import { TimePicker } from "antd";
import moment from "moment"; //날짜 및 시간을 다루는 라이브러리
import DatePickerPopver from "./DatePickerPopver";

function DatePickerDemo2() {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");

  const onChageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  return (
    <>
      <h1>테스트2</h1>
      <DatePickerPopver date={date} setDate={setDate} />
    </>
  );
}

export default DatePickerDemo2;
