const express = require('express')
const router = express.Router()

const {
  getBootCamps,
  getBootCamp,
  createBootCamp,
  updateBootCamp,
  deleteBootCamp
} = require('../controllers/bootcamps')

router
  .route('/')
  .get(getBootCamps)
  .post(createBootCamp)

router
  .route('/:id')
  .get(getBootCamp)
  .put(updateBootCamp)
  .delete(deleteBootCamp)

// router.get('/', (req, res) => {})

// router.get('/:id', (req, res) => {})

// router.post('/', (req, res) => {})

// router.put('/:id', (req, res) => {})

// router.delete('/:id', (req, res) => {})

module.exports = router
