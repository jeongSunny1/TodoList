"use client";
import Button from "@/components/ui/button";
import React, { useState } from "react";
import { formatUTC } from "../fetch";

function TimePicker() {
  const time = [
    {
      id: 1,
      hour: "01",
    },
    {
      id: 2,
      hour: "02",
    },
    {
      id: 3,
      hour: "03",
    },
    {
      id: 4,
      hour: "04",
    },
    {
      id: 5,
      hour: "05",
    },
    {
      id: 6,
      hour: "06",
    },
    {
      id: 7,
      hour: "07",
    },
    {
      id: 8,
      hour: "08",
    },
    {
      id: 9,
      hour: "09",
    },
    {
      id: 10,
      hour: "10",
    },
    {
      id: 11,
      hour: "11",
    },
    {
      id: 12,
      hour: "12",
    },
  ];

  const timeMinute = [
    {
      id: 13,
      minute: "00",
    },
    {
      id: 14,
      minute: "05",
    },
    {
      id: 15,
      minute: "10",
    },
    {
      id: 16,
      minute: "15",
    },
    {
      id: 13,
      minute: "20",
    },
    {
      id: 14,
      minute: "25",
    },
    {
      id: 15,
      minute: "30",
    },
    {
      id: 16,
      minute: "35",
    },
    ,
    {
      id: 13,
      minute: "40",
    },
    {
      id: 14,
      minute: "45",
    },
    {
      id: 15,
      minute: "50",
    },
    {
      id: 16,
      minute: "55",
    },
  ];

  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const convertToUTC = (hour: any, minute: any, timezoneOffset: any) => {
    const selectedTime = new Date();
    selectedTime.setUTCHours(Number(hour), Number(minute));
    selectedTime.setMinutes(selectedTime.getMinutes() - timezoneOffset);
    return selectedTime.toISOString();
  };

  const yourTimezoneOffset = new Date().getTimezoneOffset();

  const convertToKST = (hour: any, minute: any) => {
    const selectedTime = new Date();
    selectedTime.setUTCHours(Number(hour), Number(minute));
    // selectedTime.setHours(selectedTime.getHours() + 9);
    selectedTime.setHours(selectedTime.getHours());

    return selectedTime.toISOString();
  };

  const handleHourClick = (selectedHour: any) => {
    setHour(selectedHour);
  };

  const handleMinuteClick = (selectedMinute: any) => {
    setMinute(selectedMinute);
  };

  const handleResetClick = () => {
    setHour("");
    setMinute("");
  };

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>클릭</button>
      {isOpen && (
        <div className="flex gap-3 border-2 rounded-lg p-5">
          <div className="overflow-y-auto w-[100px] h-[150px] bg-yellow-100 p-2">
            {time.map((item) => (
              <div key={`${item?.id}_time`}>
                <Button onClick={() => handleHourClick(item.hour)}>
                  {item?.hour}
                </Button>
              </div>
            ))}
          </div>
          <div className="overflow-y-auto w-[100px] h-[150px] bg-yellow-100 p-2">
            {timeMinute.map((item) => (
              <div key={`${item?.id}_minute`}>
                <Button onClick={() => handleMinuteClick(item?.minute)}>
                  {item?.minute}
                </Button>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <p className="text-slate-500 w-[200px]">
              선택한 시간은 {hour}:{minute}입니다.
            </p>
            <br />
            <p className="text-slate-500 w-[200px]">
              선택한 utc 시간은 {convertToUTC(hour, minute, yourTimezoneOffset)}
              입니다.
            </p>
            <br />
            <p className="text-slate-500 font-bold w-[200px]">
              선택한 kst 시간은 {convertToKST(hour, minute)}입니다.
            </p>
            <Button onClick={handleResetClick}>초기화</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TimePicker;
