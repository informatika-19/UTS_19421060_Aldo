const router = require('express').Router()
const kartupelajarController = require('../controller/kartupelajar')

router.post('/insert', (req, res)=> {
    kartupelajarController.create(req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.get('/getall', (req, res)=> {
    kartupelajarController.showAllData()
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.get('/getbyid/:id', (req, res)=> {
    kartupelajarController.showDataById(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.put('/update/:id', (req, res)=> {
    kartupelajarController.update(req.params.id, req.body)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})

router.delete('/delete/:id', (req, res)=> {
    kartupelajarController.delete(req.params.id)
      .then(result =>res.json(result))
      .catch(err => res.json(err))
})
module.exports = router