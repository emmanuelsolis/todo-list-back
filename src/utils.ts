import { Status, newTaskEntry } from './types'

const isString = (string: string): boolean => {
  return typeof string === 'string'
}
const parseName = (namFromRequest: any): string => {
  if (!isString(namFromRequest)) {
    throw new Error('Incorrect or missing name ')
  }
  return namFromRequest
}

const parseDescription = (descriptionFromRequest: any): string => {
  if (!isString(descriptionFromRequest)) {
    throw new Error('Incorrect or missing description ')
  }
  return descriptionFromRequest
}
const parseStatus = (statusFromRequest: any): Status => {
  if (!isString(statusFromRequest) || !isStatus(statusFromRequest)) {
    throw new Error('Incorrect or missing status ')
  }
  return statusFromRequest
}
const isStatus = (param: any): boolean => {
  return Object.values(Status).includes(param)
}
const toNewTaskEntry = (object: any): newTaskEntry => {
  const newEntry: newTaskEntry = {
    name: parseName(object.name),
    description: parseDescription(object.description),
    status: parseStatus(object.status)
  }
  return newEntry
}

export default toNewTaskEntry
