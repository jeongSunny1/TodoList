import { Actions, LoginActions, LoginState, State } from "../types/type";
import { create } from "zustand";

export const useTodoStore = create<State & Actions>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  deleteTodo: (todo) =>
    set((state) => ({
      todos: state.todos.filter((item) => item.id !== todo.id),
    })),
  putTodo: (updatedTodo) =>
    set((state) => ({
      todos: state.todos.map((item) =>
        item.id === updatedTodo.id ? updatedTodo : item
      ),
    })),
}));

export const useLoginStore = create<LoginState & LoginActions>((set) => ({
  login: [],
  loginCheck: (todo) => set((state) => ({ login: [...state.login, todo] })),
}));
