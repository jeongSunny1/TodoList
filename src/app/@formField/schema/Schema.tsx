import * as z from "zod";

//refine은 zod 라이브러리에서 제공하는 메서드 중 하나로 스키마의 값을 추가적으로 검증하거나 수정할 수 있음
//some은 조건에 만족하면 true값을 return
export const formSchema = z.object({
  type: z.enum(["all", "mentions", "none"], {
    required_error: "하나는 선택해야합니다.",
  }),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "하나는 선택해야합니다.",
  }),
  switch: z.boolean().default(false).optional(),
  username: z
    .string()
    .min(1, "필수값입니다.")
    .min(2, {
      message: "2글자 이상으로 입력해야합니다.",
    })
    .max(30, {
      message: "30자 이하로 입력해야합니다.",
    })
    .regex(/^[a-zA-Z]+$/, "특수문자와 숫자를 포함 할 수 없습니다.")
    .trim(),
  email: z
    .string()
    .min(1, "필수값입니다.")
    .email({
      message: "이메일 형식이아닙니다.",
    })
    .trim(),
  date: z
    .date({
      required_error: "필수값입니다.",
    })
    .nullable(),
  userArray: z.array(
    z.object({
      id: z.number(),
      name: z.string().min(1, "필수값입니다.").trim(),
      emailUser: z.string().min(1, "필수값입니다.").trim(),
      emailUrl: z.string(),
    })
  ),
});
