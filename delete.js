const dbconnect=require('./mongodb')

const del=async ()=>{
    let db=await dbconnect()
    let del=await db.deleteOne(
        {name:'Macbook Air'}
    )
    if(del.acknowledged)
    {
        console.log("Deleted")
    }
}

del();