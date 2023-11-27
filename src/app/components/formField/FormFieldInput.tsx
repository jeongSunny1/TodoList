import Button from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Input from "@/components/ui/input";
import React from "react";

interface PropsInput {
  form: any;
  onDeleteUsername: () => void;
}

function FormFieldInput({ form, onDeleteUsername }: PropsInput) {
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
            <FormMessage className="text-red-500" />
          </FormItem>
        )}
      />
      <Button onClick={onDeleteUsername}>DELETE</Button>
    </>
  );
}

export default FormFieldInput;
