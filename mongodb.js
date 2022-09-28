const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const conn = new MongoClient(url)

async function dbconnect() {
    let connect = await conn.connect();
    let db = connect.db("e-comm")
    return db.collection("products")

}

module.exports=dbconnect;