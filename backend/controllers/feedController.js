const asyncHandler = require('express-async-handler')

const Feed = require('../model/feedModel')
// description GET feed

// @route GET /api/feed

// access Private

// GET request is working
const getFeeds = asyncHandler(async(req, res) => {
  const feeds = await Feed.find()  
  res.status(200).json(feeds)



})

// description Set feed

// @route POST /api/feed

// access Private

// post request is working
const setFeed =asyncHandler(async(req, res) => {
    if(!req.body.text || !req.body.name){
      res.status(400)
      throw new Error('Please add a text field')

    }

    const feed = await Feed.create({
       text: req.body.text,
       name: req.body.name,
       

    })

    res.status(200).json(feed)
  
  
})

  // description update feed

// @route PUT /api/feed/:id

// access Private

// update request is working
const updateFeed =asyncHandler( async (req, res) => {
   const feed = await Feed.findById(req.params.id)

   if(!feed){
     res.status(400)
     throw new Error('Feed not found')
       

    }

    const updateFeed = await Feed.findByIdAndUpdate(req.params.id, req.
        body, {
          new:  true,  

        })  

        res.status(200).json(updateFeed)

    })

   

// description delete feed

// @route Delete /api/goals/:id

// access Private

// Delete request is working
const deleteFeed =asyncHandler (async(req, res) => {
   const feed = await Feed.findById(req.params.id)
   
    if (!feed) {
       res.status(400)
       throw new error ('Feed not found')

    }

    await feed.remove()

    res.status(200).json({id: req.params.id})
  
  
  
})



module.exports = {
  getFeeds,
  setFeed,
  updateFeed,
  deleteFeed 

}
