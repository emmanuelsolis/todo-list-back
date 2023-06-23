
export enum Status {
  Done = 'done',
  Pending = 'pending'
}

export interface Task {
  id: number
  name: string
  description: string
  status: Status
}

export type newTaskEntry = Omit<Task, 'id'>
