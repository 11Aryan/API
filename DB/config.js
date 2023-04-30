const mysql =require("mysql2");
const connection=mysql.createConnection(
    {
        host:"127.0.0.1",
        user:"root",
        password:"",
        database:"test",
    }
);
connection.connect((err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Connected to DB");
    }
});
module.exports=connection;