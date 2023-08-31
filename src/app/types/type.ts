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

export type DataProps = {
  todoList: Todo[];
  deleteTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
};

export type PutProps = {
  item: any;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
};

export type TodoData = {
  title: string;
  content: string;
};
