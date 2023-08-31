import { Actions, State } from "../types/type";
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
