const express = require('express')
const router = express.Router()
const {getFeeds,setFeed,updateFeed,deleteFeed} = require('../controllers/feedController')

router.get('/', getFeeds)

router.post('/',setFeed)

router.put('/:id',updateFeed)

router.delete('/:id',deleteFeed)


module.exports = router

