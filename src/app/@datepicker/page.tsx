"use client";

import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import dayjs from "dayjs";
import {
  Controller,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import ko from "date-fns/locale/ko";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("ko", ko);

function CustomDatePicker() {
  const {
    control,
    reset,
    formState: { errors },
  } = useForm();

  const isPossibleDay = (date: any) => {
    const currentDate = new Date();
    const selectedDate = new Date(date);
    return currentDate.getDate() <= selectedDate.getDate();
  };

  return (
    <div>
      <Controller
        name="participation_started_at"
        control={control}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            className="w-[400px] bg-red-200 p-3 rounded-md"
            dateFormat="yyyy년 MM월 dd일 a hh시 mm분"
            dateFormatCalendar="yyyy년 MM월"
            locale="ko"
            showTimeSelect
            filterDate={isPossibleDay}
            timeFormat="HH:mm"
            timeIntervals={5}
            timeCaption="시작시간"
            placeholderText="시작일"
            selected={value}
            onChange={(data: any) => onChange(data)}
            dayClassName={(date: any) =>
              dayjs(date).day() === 6
                ? "saturday"
                : dayjs(date).day === 0
                ? "sunday"
                : null
            }
          />
        )}
      />
    </div>
  );
}

export default CustomDatePicker;
