const conn=require('./mongodb')
// dbconnect().then((item) => {
//     item.find({}).toArray().then((item) => {
//         console.log(item)
//     })
// })

const main =async ()=>{
    let data=await conn();
    data=await data.find().toArray()
    console.log(data);
}
main()