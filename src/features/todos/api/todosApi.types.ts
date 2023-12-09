export type ResponseTodo = {
  id: string;
  title: string;
  addedDate: string;
  order: number;
};

export type ResponseTasks = {
  items: Task[];
  totalCount: number;
  error: string;
};

export type Task = {
  description: string;
  title: string;
  completed: boolean;
  status: number;
  priority: number;
  startDate: string;
  deadline: string;
  id: string;
  todoListId: string;
  order: number;
  addedDate: string;
};
