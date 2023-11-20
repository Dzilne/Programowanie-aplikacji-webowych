
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = express.Router()


router.get('/students', async (req, res) => {
  try {
    const students = await prisma.student.findMany()
    res.json(students)
  } catch (error) {
    res.json(notFoundError)
  }
})

router.get('/students/:id', async (req, res) => {
  const chosenStudentId = parseInt(req.params.id)
  try {
    const chosenStudent = await prisma.student.findUnique({
      where: { id: chosenStudentId },
    })
    if (chosenStudent) {
      res.json(chosenStudent)
    } else {
      res.json(notFoundError)
    }
  } catch (error) {
    res.json(notFoundError)
  }
})

router.get('/subjects', async (req, res) => {
  try {
    const subjects = await prisma.subject.findMany()
    res.json(subjects)
  } catch (error) {
    res.json(notFoundError)
  }
})

router.get('/subjects/:id', async (req, res) => {
  const chosenSubjectId = parseInt(req.params.id)
  try {
    const chosenSubject = await prisma.subject.findUnique({
      where: { id: chosenSubjectId },
    })
    if (chosenSubject) {
      res.json(chosenSubject)
    } else {
      res.json(notFoundError)
    }
  } catch (error) {
    res.json(notFoundError)
  }
})

export { router as apiRouter }
