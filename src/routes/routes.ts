
import express from 'express'
import { getTaskById, getAllTasks, addTask } from '../services/tasksTodoServices'
import toNewTaskEntry from '../utils'

export const router = express.Router()

router.get('/', (_req, res) => {
  res.send('Mi página de inicio')
})
router.get('/all', (_req, res) => {
  res.send(getAllTasks())
})

router.get('/:id', (req, res) => {
  const task = getTaskById(+req.params.id)
  res.send(task !== undefined ? task : (404))
})

router.post('/', (req, res) => {
  try {
    const newTaskEntry = toNewTaskEntry(req.body)

    const addedTaskEntry = addTask(newTaskEntry)
    res.json(addedTaskEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})
