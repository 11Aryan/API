const connection=require("../db/config");
module.exports={

    // function which will display all details
    getAllUsers:(req,res)=>{
        connection.query("SELECT * FROM user",(err,results)=>{
            if(err)
              {res.status(500).send("Error retrieving users");
              // console.log(err);
              } 
            else
              res.json(results);  
            })
        },
    // function to get details by id        
    getById:(req,res)=>{
       let id=req.query.id;
       console.log(id);
        connection.query(`SELECT * FROM user where id=${id}`,(err,results)=>{
            if(err)
              {res.status(500).send("Error retrieving users");
              // console.log(err);
              } 
            else
              res.json(results);  
            })
    },
    deleteUser:(req,res)=>{
        const id=req.params.id;
        connection.query("DELETE FROM user where id=?"+id,(err,results)=>{
            if(err)
              {res.status(500).send("Error deleting users");
               console.log(err);
              } 
            else
              res.status(200).send("User DELETED");  
            })
        }

    

}