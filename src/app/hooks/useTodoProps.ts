// import { useState } from "react";
// import { useTodoActions, useTodos } from "../schema/Store";
// import { Todo } from "../types/type";
// import { schema } from "../schema/DataSchema";

// const useTodoProps = () => {
//   const [todoInput, setTodoInput] = useState("");

//   // custom hooks로 store 사용
//   const todos = useTodos();
//   const { addTodo, deleteTodo, putTodo } = useTodoActions();

//   const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTodoInput(e.target.value);
//   };

//   // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   if (!todoInput) return;
//   //   addTodo(todoInput);
//   //   setTodoInput("");
//   // };

//   const onSubmitHandler = (data: any) => {
//     const validtion = schema.safeParse(data);
//     if (validtion.success) {
//       const newTodo: Todo = {
//         id: Date.now(),
//         title: data.title,
//         content: data.content,
//       };
//       addTodo(newTodo);
//       // reset();
//     }
//   };

//   return {
//     todos,
//     todoInput,
//     deleteTodo,
//     putTodo,
//     onChangeInput,
//     onSubmitHandler,
//   };
// };

// export default useTodoProps;
