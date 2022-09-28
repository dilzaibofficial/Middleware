const dbconnect=require('./mongodb')



const ins=async ()=>{
    let db=await dbconnect()
    let give=await db.insertMany([
        {name:'Macbook Pro',brand:"Apple",price:600,category:"Laptop"},
        {name:'Macbook Air',brand:"Apple",price:400,category:"Laptop"}
    ]
    )
    if(give.acknowledged){ 
    console.log("data inserted")
    }
}


ins()