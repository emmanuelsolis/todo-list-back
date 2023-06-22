import { Task } from '../types'
import tasksTodoData from './tasksTodo.json'

const tasksTodo: Task[] = tasksTodoData as Task[]
export const getAllTasks = (): Task[] => tasksTodo
export const addTask = (): undefined => undefined
