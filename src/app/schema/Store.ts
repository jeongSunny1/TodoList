import {
  Actions,
  LoginActions,
  LoginState,
  State,
  TodoStoreState,
} from "../types/type";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import useStore from "../store/useStore";
// export const useTodoStore = create<State & Actions>((set) => ({
//   todos: [],
//   addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
//   deleteTodo: (todo) =>
//     set((state) => ({
//       todos: state.todos.filter((item) => item.id !== todo.id),
//     })),
//   putTodo: (updatedTodo) =>
//     set((state) => ({
//       todos: state.todos.map((item) =>
//         item.id === updatedTodo.id ? updatedTodo : item
//       ),
//     })),
// }));

export const useTodoStore = create<TodoStoreState>()(
  immer(
    devtools(
      persist(
        (set) => ({
          todos: [],
          actions: {
            addTodo: (todo) => {
              // console.log("Add Todo:", todo);
              set((state) => ({ todos: [...state.todos, todo] }));
            },
            deleteTodo: (todo) => {
              set((state) => ({
                todos: state.todos.filter((item) => item.id !== todo.id),
              }));
            },
            putTodo: (updatedTodo) => {
              set((state) => ({
                todos: state.todos.map((item) =>
                  item.id === updatedTodo.id ? updatedTodo : item
                ),
              }));
            },
          },
        }),
        {
          name: "todo-storage",
          partialize: (state) => ({ todos: state.todos }),
        }
      )
    )
  )
);

// 개별 selector hooks를 생성하여 export
// state사용시 useStore에 store와 selector 전달 (rendering에러 방지)
export const useTodos = () => useStore(useTodoStore, (state) => state.todos);
// actions는 useStore를 사용하지 않음
export const useTodoActions = () => useTodoStore((state) => state.actions);

export const useLoginStore = create<LoginState & LoginActions>((set) => ({
  login: [],
  loginCheck: (todo) => set((state) => ({ login: [...state.login, todo] })),
}));
