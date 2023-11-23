"use client";

import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import Button from "@/components/ui/button";

import FormFieldCheckbox from "../components/formField/FormFieldCheckbox";
import FormFieldRadio from "../components/formField/FormFieldRadio";
import FormFieldSwitch from "../components/formField/FormFieldSwitch";
import FormFieldInput from "../components/formField/FormFieldInput";
import FormFieldSelect from "../components/formField/FormFieldSelect";
import FormFieldDate from "../components/formField/FormFieldDate";

function FormFiledPage() {
  //refine은 zod 라이브러리에서 제공하는 메서드 중 하나로 스키마의 값을 추가적으로 검증하거나 수정할 수 있음
  //some은 조건에 만족하면 true값을 return
  const formSchema = z.object({
    type: z.enum(["all", "mentions", "none"], {
      required_error: "하나는 선택해야합니다.",
    }),
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "하나는 선택해야합니다.",
    }),
    switch: z.boolean().default(false).optional(),
    username: z
      .string({
        required_error: "필수값입니다.",
      })
      .min(2, {
        message: "2글자 이상으로 입력해야합니다.",
      })
      .max(30, {
        message: "30자 이하로 입력해야합니다.",
      }),
    email: z
      .string({
        required_error: "필수값입니다.",
      })
      .email({
        message: "이메일 형식이아닙니다.",
      }),
    date: z.date({
      required_error: "필수값입니다.",
    }),
  });

  const defaultValue = {
    items: [],
    switch: false,
    username: "",
    email: "",
    date: new Date(),
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValue,
  });

  const onsubmit = () => {
    alert("제출했습니다.");
    console.log("Form :", form.getValues());
    form.reset(defaultValue);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-8 p-3">
        {/* 1 */}
        <FormFieldCheckbox form={form} />

        {/* 2 */}
        <FormFieldRadio form={form} />

        {/* 3 */}
        <FormFieldSwitch form={form} />

        <div className="flex gap-2">
          {/* 4 */}
          <FormFieldInput form={form} />
          {/* 5 */}
          <FormFieldSelect form={form} />
        </div>
        {/* 6 */}
        <FormFieldDate form={form} />

        <Button type="submit">Update</Button>
      </form>
    </Form>
  );
}

export default FormFiledPage;
