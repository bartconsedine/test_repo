const express = require('express')
const router = express.Router()

//Item Model
const Item = require('../../models/Item')

//@route Get api/items
//@Desc get all items
//@Desc get all items
router.get('/', (req, res) =>{
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

//@route POST api/items
//@Desc get all items
//@Desc get all items
router.post('/', (req, res) =>{
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save().then(item=>res.json(item))
})  

//@route DELETE api/items
//@Desc get all items
//@Desc get all items
router.delete('/:id', (req, res) =>{
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

//@route DELETE api/items
//@Desc get all items
//@Desc get all items
router.get('/:id', (req, res) =>{
    Item.findById(req.params.id)
    .then(items => res.json(items))
})



module.exports = router;