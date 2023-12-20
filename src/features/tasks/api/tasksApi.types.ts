export type ResponseCreateTask<T> = {
  data: T;
  resultCode: 0 | 1 | 10;
  messages: string[];
};

export type ResponseTasks = {
  items: TaskType[];
  totalCount: number;
  error: string;
};

export type TaskType = {
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

export type UpdateTaskModelType = {
  description: string;
  title: string;
  status: TaskStatuses;
  priority: TaskPriorities;
  startDate: string;
  deadline: string;
};

export enum TaskStatuses {
  New = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3,
  All = 4,
}

export enum TaskPriorities {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4,
}
