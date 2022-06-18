export interface TodoObj {
  id: number;
  title: string;
  completed: boolean;
}

export interface NewTodo {
  title: string;
  completed: boolean;
}

export interface NavigationProps {
  text: string;
}
export interface ButtonProps {
  text: string;
  disabled: boolean;
  handleClick: () => void;
}
export interface CreateTodoProps {
  addTodo: ({}: NewTodo) => void;
}
