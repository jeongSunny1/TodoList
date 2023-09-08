import { TodoStoreSchema } from "../schema/DataSchema";
import { z } from "zod";

export type Todo = {
  id: number;
  title: string;
  content: string;
};

//zustand
export type State = {
  todos: Todo[];
};
//zustand
export type Actions = {
  addTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
  putTodo: (todo: Todo) => void;
};

export type TodoStoreState = z.infer<typeof TodoStoreSchema>;

export type DataProps = {
  todos: Todo[];
  // deleteTodo: (todo: Todo) => void;
  // updateTodo: (todo: Todo) => void;
};

export type PutProps = {
  item: any;
  // updateTodo: (todo: Todo) => void;
  // deleteTodo: (todo: Todo) => void;
};

export type TodoData = {
  title: string;
  content: string;
};

//login zustand
export type Login = {
  id: number;
  email: string;
  password: string;
};
//zustand
export type LoginState = {
  login: Login[];
};
//zustand
export type LoginActions = {
  loginCheck: (login: Login) => void;
};
