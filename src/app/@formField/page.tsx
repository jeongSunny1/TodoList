"use client";

import React, { useState } from "react";
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
import { formSchema } from "./schema/Schema";
import FormFiledArrayInput from "../components/formField/FormFiledArrayInput";

const defaultUserArray = [
  {
    name: "Test",
    emailUser: "test",
    emailUrl: "@goole.com",
  },
];

function FormFiledPage() {
  const [userArray, setUserArray] = useState(
    defaultUserArray.map((user) => ({
      ...user,
      get email() {
        return `${user.emailUser}${user.emailUrl}`;
      },
    }))
  );

  const defaultValue = {
    items: [],
    switch: false,
    date: null,
    userArray: userArray,
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValue,
  });

  //테스트 완료 form.reset(defaultValue); 지우면 됨.
  const onDeleteErrorMsg = () => {
    if (form.getValues("username") === "test") {
      form.setError("username", {
        message: "통과.",
      });
      console.log("통과");
      return true;
    }
    console.log("실패");
    return false;
  };

  //Form에서 Submit을 제어
  const [isSubmit, setIsSubmit] = useState(false);

  const onsubmit = () => {
    console.log("Form~~~");

    onDeleteErrorMsg();
    alert("제출했습니다.");
    console.log("Form:", form.getValues());

    form.reset(defaultValue);
  };

  console.log("Form 2:", form.getValues());

  //특정 필드를 지우고 싶을때 사용
  const onDeleteUsername = () => {
    alert("필드를 지웠습니다.");
    form.resetField("username");
  };

  //초기화
  const onReset = () => {
    setIsSubmit(false);
    form.reset();
    //에러메시지 지워줌
    // form.clearErrors("userArray");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (isSubmit) {
            form.handleSubmit(onsubmit)();
          }
        }}
        className="space-y-8 p-3 flex flex-col"
      >
        <div className="flex justify-around">
          {/* 1 */}
          <FormFieldCheckbox form={form} />

          {/* 2 */}
          <FormFieldRadio form={form} />

          {/* 3 */}
          <FormFieldSwitch form={form} />
        </div>

        <div className="flex justify-around">
          {/* 6 */}
          {/* <FormFieldDate form={form} /> */}
        </div>

        {/* <div className="flex gap-2">
          <FormFieldInput form={form} onDeleteUsername={onDeleteUsername} />
          <FormFieldSelect form={form} />
        </div> */}

        {/* 7 */}
        <FormFiledArrayInput form={form} />

        <div className="flex justify-center gap-2">
          <Button
            type="submit"
            onClick={() => {
              setIsSubmit(true);
              form.handleSubmit(onsubmit)();
            }}
          >
            Update
          </Button>

          <Button
            type="button"
            onClick={onReset}
            className="bg-white border-2 border-pink-200 text-violet-400"
          >
            Reset
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default FormFiledPage;
