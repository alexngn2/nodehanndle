// Object Relational Mapper ORM file

const connection = require('./connection')

const orm = {
    selectAll: async () => {
        // select all the records from burgers table
        const sql = 'SELECT * FROM burgers'
        const [rows] = await connection.query(sql)
        return rows
    },

    insertOne: async (burgerName, devoured) => {
        devoured = fixBool(devoured)
        // Insert record to burgers table
        const sql = `INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)`
        const [result] = await connection.query(sql, [burgerName, devoured])
        let burgerId = result.insertId
        return burgerId
    },

    updateOne: async (id, devoured) => {
        // update record from the burgers table using id
        devoured = fixBool(devoured)
        const sql = `UPDATE burgers SET ? WHERE id = ?`
        await connection.query(sql, [
        { devoured: devoured },
        id
        ])
        return id
    }
}

// a method to fix bool value and convert value type, this is a safety measure
function fixBool (prop) {
    if (prop === 'false') prop = false
    else if (prop === '0') prop = false
    else if (prop === false) prop = false
    else if (prop === 0) prop = false
    else if (prop === null) prop = false
    else if (prop === undefined) prop = false
    else prop = true
    return prop
  }

  // export module
module.exports = orm
