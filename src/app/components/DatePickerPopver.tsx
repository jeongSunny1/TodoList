import React from "react";
import Button from "@/components/ui/button";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Timer, TimerIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DateType = {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};
function DatePickerPopver({ date, setDate }: DateType) {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              "w-[280px] justify-start text-left font-normal text-black",
              !date && "text-muted-foreground"
            )}
          >
            <div className="flex justify-between">
              {date ? (
                format(date, "yyyy년도 MM월 dd일")
              ) : (
                <span>Pick a date</span>
              )}{" "}
              <CalendarIcon className="mr-2 h-4 w-4" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default DatePickerPopver;
