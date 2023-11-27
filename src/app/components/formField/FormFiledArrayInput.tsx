"use client";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import React from "react";
import { useFieldArray } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function UserForm({ form }: any) {
  const { fields, append, remove } = useFieldArray({
    name: "userArray",
  });
  // console.log(fields);

  const onDelete = (index: any) => {
    const updatedFields = [...fields];
    updatedFields[index].name = "";
    updatedFields[index].emailUser = "";
    updatedFields[index].emailurl = "";
    form.setValue("userArray", updatedFields);
  };

  return (
    <>
      {fields.map((item, index) => (
        <div key={item.id} className="flex justify-center gap-2">
          <FormField
            control={form.control}
            name={`userArray.${index}.name`}
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormLabel>name :</FormLabel>
                <FormControl>
                  <Input
                    onChange={field.onChange}
                    value={field.value}
                    className="w-[250px]"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`userArray.${index}.emailUser`}
            render={({ field }) => (
              <FormItem className="flex items-center gap-2">
                <FormLabel>email :</FormLabel>
                <FormControl>
                  <Input
                    onChange={field.onChange}
                    value={field.value}
                    className="w-[250px]"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name={`userArray.${index}.emailUrl`}
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="w-[150px] h-10 mt-2">
                      <SelectValue placeholder="Select" />
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
          <Button
            onClick={() => onDelete(index)}
            className="h-8 flex items-center justify-center mt-3"
          >
            DELETE
          </Button>

          {/* <Button
            type="button"
            onClick={() => remove(index)}
            className="h-8 flex items-center justify-center mt-3"
          >
            x
          </Button> */}

          {/* <Button
            type="button"
            onClick={() => {
              append({
                id: "",
                name: "",
                emailUser: "",
                emailUrl: "",
                email: "",
              });
            }}
            className="h-8 flex items-center justify-center mt-3"
          >
            +
          </Button> */}
        </div>
      ))}
    </>
  );
}

export default UserForm;
