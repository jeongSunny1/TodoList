import { z } from "zod";

const emailRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
//최소 8자 ~ 최대15 ,최소한 하나의 소문자 알파벳 (a-z)을 포함, 최소한 하나의 숫자 (0-9)를 포함, 다른 문자나 특수 문자는 불가
const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*d)[a-zA-Zd]{8,}$");

export const schema = z.object({
  title: z.string().trim().min(1).max(15),
  content: z.string().trim().min(5).max(20),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "올바른 이메일 형식이 아닙니다." })
    .regex(emailRegex, { message: "이메일 형식을 확인바랍니다." }),
  password: z
    .string()
    .trim()
    .min(8, { message: "패스워드는 최소 8자 이상이어야 합니다." })
    .max(15, { message: "패스워드는 최대 15자까지 가능합니다." })
    .regex(passwordRegex, {
      message: "패스워드는 소문자 및 숫자를 포함해야 합니다.",
    }),
});

// state 스키마 정의
export const TodoSchema = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
});

// 전체 스토어에 대한 스키마 정의 (state + actions)
export const TodoStoreSchema = z.object({
  todos: TodoSchema.array(),
  actions: z.object({
    addTodo: z.function().args(z.string()),
    deleteTodo: z.function().args(TodoSchema),
    putTodo: z.function().args(TodoSchema),
  }),
});

export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export type TaskType = z.infer<typeof taskSchema>;
