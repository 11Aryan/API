const express = require('express')
const app = express()
const userRoutes=require("./routes/user.routes")

app.use(express.json());


const port = 3000

app.get('/', (req, res) => {
  res.send({ hello:"world from get"})
})
app.use("/user",userRoutes);
//app.post('/', (req, res) => {
    //let a=req.body.a;
    //let b=req.body.b;
    
    
    // let a=parseInt(req.query.a);
    // let b=parseInt(req.query.b);
    // let c=a+b;
    // let n=req.query.name;


//    let op=req.body.op;
//    switch(op)
//    {
//      case"+":
//       c=a+b;
//       break;
//     case"-":
//       c=a-b;
//     case"*":
//       c=a*b;
//       break;
//     case"/":
//       c=a/b;
//       break;
//    }
 //  res.send({result:c,user:n}); // response in json(all keyvalue pair in double quotes)

 // });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
//to track user:
// cookie,jwt jason web token