// bring in the database orm file
const orm = require('../config/orm')

// create burdge object, another level of extraction of the orm
const burger = {
    
    findAllBurger: async () => await orm.selectAll(),

    insertNewBurger: async (burgerName, devoured) => await orm.insertOne(burgerName, devoured),

    updateBurger: async (burgerID, devoured) => await orm.updateOne(burgerID, devoured)
}

// export module
module.exports = burger