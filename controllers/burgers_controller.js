const burger = require('../models/burger')
const router = require('express').Router()

/* HTML Routes */
router.get('/', async function (req, res) {
    const data = await burger.findAllBurger()
    res.render('index', { burgers: data })
})
  
/* API ROUTES */
router.get('/api/burgers', async function (req, res) {
try {
    const burgers = await burger.findAllBurger()
    res.status(200).json({ data: burgers })
} catch (err) {
    res.status(500).json(err)
}
})

router.post('/api/burgers', async function (req, res) {
try {
    const {name, devoured} = req.body
    console.log(req.body)
    let newBurgerID = await burger.insertNewBurger(name,devoured)
    res.status(201).json(newBurgerID)

} catch (err) {
    res.status(500).json(err)
}
})

router.put('/api/burgers/:id', async function (req, res) {
try {
    let burgerID = req.params.id
    const {devoured} = req.body
    let updatedBurgerID = await burger.updateBurger(burgerID,devoured)
    res.status(201).json(updatedBurgerID)
    
} catch (err) {
    res.status(500).json(err)
}
})

module.exports = router