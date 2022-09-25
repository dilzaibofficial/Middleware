module.exports= reqFilter=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("Enter Age First.")
    }
    else if(req.query.age<18)
    {
        resp.send("You Can Not Access This Page.")
    }
    else{
    next();
    }
}