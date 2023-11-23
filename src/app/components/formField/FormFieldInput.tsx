import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Input from "@/components/ui/input";
import React from "react";

function FormFieldInput({ form }: any) {
  return (
    <>
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem className="flex items-center gap-2">
            <FormLabel>이름 :</FormLabel>
            <FormControl>
              <Input onChange={field.onChange} value={field.value} />
            </FormControl>
            <FormMessage className="h-5 text-red-500" />
          </FormItem>
        )}
      />
    </>
  );
}

export default FormFieldInput;
