import { Task, newTaskEntry } from '../types'
import tasksTodoData from './tasksTodo.json'

const tasksTodo: Task[] = tasksTodoData as Task[]

export const getAllTasks = (): Task[] => tasksTodo

export const getTaskById = (id: number): Task | undefined => {
  const task = tasksTodo.find(task => task.id === id)
  return task
}

export const addTask = (newTaskEntry: newTaskEntry): Task => {
  const newTask: Task = {
    id: Math.max(...tasksTodo.map(task => task.id)) + 1,
    ...newTaskEntry
  }
  tasksTodo.push(newTask)
  return newTask
}
export const updateTask = (): undefined => undefined

export const deleteTask = (): undefined => undefined
