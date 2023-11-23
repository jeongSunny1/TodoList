import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Input from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import React from "react";

function FormFieldSelect({ form }: any) {
  return (
    <div className="flex items-center gap-2">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="flex items-center gap-2">
            <FormLabel>이메일 :</FormLabel>
            <FormControl>
              <Input onChange={field.onChange} value={field.value} />
            </FormControl>
            <FormMessage className=" text-red-500" />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="w-[150px] h-10 mt-2">
                  <SelectValue
                    className="placeholder:text-black"
                    placeholder="Select"
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="@google.com">@google.com</SelectItem>
                <SelectItem value="@naver.com">@naver.com</SelectItem>
                <SelectItem value="@kakao.com">@kakao.com</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </div>
  );
}

export default FormFieldSelect;
