const express = require('express')
const router = express.Router()

const stand = require('../models/stands')

router.get('/', async (req, res) => {
    try {
        const stands = await stand.find()
        res.status(200).json(stands)
    }
    catch (err) {
        res.status(418).json({ message: err.message })
    }
})

router.get('/:id', getStand, (req, res) => {
   res.json(res.stand)
})


router.post('/', async (req, res) => {
    const Stand = new stand({
        name: req.body.name,
        power: req.body.power,
        owner: req.body.owner
    })
    try {
        const newStand = await Stand.save()
        res.status(201).json(newStand)
    }
    catch (err) {
        res.status(418).json({ message: err.message })
    }
})

router.patch('/:id', getStand, async (req, res) => {
    if (req.body.power != null) {
        res.stand.power = req.body.power
    }
    if (req.body.name != null) {
        res.stand.name = req.body.name
    }
    if (req.body.owner != null) {
        res.stand.owner = req.body.owner
    }
    try {
        const updatedStand = await res.stand.save()
        res.json(updatedStand)
    }
    catch (err) {
        res.status(418).json({ message: err.message })
    }
})

router.delete('/:id', getStand, async (req, res) => {
    try {
        await res.stand.remove()
        res.json({ message: "Stand removed"})
    }
    catch (err) {
        res.status(418).json({ message: err.message })

    }
})

async function getStand(req, res, next) {
    try {   
        Stand = await stand.findbyId(req.params.id)
        if (stand == null) {
            return res.status(418).json({ message: "Stand does not exist" })
        }
    }   
    catch (err) {
        return res.status(418).json({ message: err.message })
    }
    res.stand = stand
    next()
}

module.exports = router