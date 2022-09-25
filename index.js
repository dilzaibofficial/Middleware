const {MongoClient, GSSAPICanonicalizationValue}=require('mongodb')
const url ="mongodb://localhost:27017"
const conn=new MongoClient(url)

async function getdata1()
{
    let result= await conn.connect();
    let db =result.db('e-comm')
    let collection=db.collection('products')
    let res= await collection.find({}).toArray()
    console.log('E-Comm Products Data.')
    console.log(res)
}

async function getdata2()
{

    let result= await conn.connect();
    let db =result.db('Facebook')
    let collection=db.collection('Profile')
    let res= await collection.find({}).toArray()
    console.log('Facebook Profile Data.\n')
    console.log(res)
}

getdata1()
getdata2()
