import express from "express"
import mysql from "mysql"
import cors from "cors"
const app = express()
import sign from "jsonwebtoken"

const db = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "admin",
    database: "bookbuddy",
    port: 3306
})

app.use(express.json());
app.use(cors());


app.get("/", (req,res)=>{
    res.json("Hello this is backend")
})

app.get("/users" , (req , res)=>{
     const q = "SELECT * FROM users"
     db.query(q, (err , data)=>{
         if(err) return res.json(err)
         return res.json(data)
     })

})

app.post("/users", (req,res)=>{
    const q = "insert into `users` (`fname`,`lname`,`email`,`password`) values (?)"
    const values = [
        req.body.fname,
        req.body.lname,
        req.body.email,
        req.body.password,
    ];
    db.query(q, [values], (err , data)=>{
        if(err) return res.json(err)
            return res.json("user has been created sucesfully");
    }); 
});
app.get("/ausers" , (req , res)=>{
    const q = "SELECT * FROM `users` where `idusers` != 1";
    db.query(q, (err , data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})
app.post("/ausers/add", (req,res)=>{
    const q = "insert into `users` (`fname`,`lname`,`email`) values (?)"
    const values = [
        req.body.fname,
        req.body.lname,
        req.body.email,
    ];
    db.query(q, [values], (err , data)=>{
        if(err) return res.json(err)
            return res.json("user has been created sucesfully");
    }); 
});


app.delete("/ausers/:id", (req, res) => {
    const idusers = req.params.id;
    const q = " DELETE FROM `users` WHERE `idusers` = (?) ";
    db.query(q,[idusers], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

  app.get("/ahotel" , (req , res)=>{
    const q = "SELECT * FROM `hotel` ";
    db.query(q, (err , data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})
app.post("/ahotel/add", (req,res)=>{
    const q = "insert into `hotel` (`hname`,`hcity`,`htype`) values (?)"
    const values = [
        req.body.hname,
        req.body.hcity,
        req.body.htype,
    ];
    db.query(q, [values], (err , data)=>{
        if(err) return res.json(err)
            return res.json("hotel has been created sucesfully");
    }); 
});
app.delete("/ahotel/:id", (req, res) => {
    const hid = req.params.id;
    const q = " DELETE FROM `hotel` WHERE `hid` = (?) ";
    db.query(q,[hid], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

  app.get("/aplane" , (req , res)=>{
    const q = "SELECT * FROM `plane` ";
    db.query(q, (err , data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})
app.post("/aplane/add", (req,res)=>{
    const q = "insert into `plane` (`ptype`,`start`,`end`,`price`) values (?)"
    const values = [
        req.body.ptype,
        req.body.start,
        req.body.end,
        req.body.price,
    ];
    db.query(q, [values], (err , data)=>{
        if(err) return res.json(err)
            return res.json("plane has been created sucesfully");
    }); 
});
app.delete("/aplane/:id", (req, res) => {
    const pid = req.params.id;
    const q = " DELETE FROM `plane` WHERE `pid` = (?) ";
    db.query(q,[pid], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });



app.post("/login", (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    db.query(
        "SELECT * FROM `users` where `email` = ? and `password` = ?",
        [email,password],
        (err,result) => {
            if (err) {
                res.send({ err: err });
            }

            if(result.length>0){
                res.send(result);
            } else {
                res.send({ message: "Wrong email or password"});
            }
        }
    );
});

// search by city
// app.get("/hotel" , (req , res)=>{
//     const value1 = req.body.hname;
//     const value2 = req.body.hcity;
//     const value3 = req.body.htype;

//     var q = "SELECT * FROM `hotel` where `hname` = ? or `hcity` = ? or `htype` = ?" ;
//     if(value1.length <= 0 && value2.length <= 0 && value3.length <= 0 ){
//         q = "SELECT * FROM `hotel`" ;
//     }
//     else if(value2.length <= 0 && value1.length <= 0 ){
//         q = "SELECT * FROM `hotel` where `htype` = ?" ;
//         value1 = value3 ;
//     }else if(value1.length <= 0 && value3.length <= 0 ){
//         q = "SELECT * FROM `hotel` where `hcity` = ?" ;
//         value1 = value2 ;
//     }else if(value2.length <= 0 && value3.length <= 0 ){
//         q = "SELECT * FROM `hotel` where `hname` = ?" ;
//     }else if(value2.length <= 0 ){
//         q = "SELECT * FROM `hotel` where `hname` = ? or `htype` = ?" ;
//         value2 = value3 ;
//     }else if(value1.length <= 0 ){
//         q = "SELECT * FROM `hotel` where `hcity` = ? or `htype` = ?" ;
//         value1 = value2  ;
//         value2 = value3 ;
//     }else if(value3.length <= 0  ){
//         q = "SELECT * FROM `hotel` where `hname` = ? or `hcity` = ?" ;
//      }else {
//         q = "SELECT * FROM `hotel` where `hname` = ? or `hcity` = ? or `htype` = ?" ;
//      }

//     db.query(q, [value1 , value2 , value3] , (err , data)=>{
//         if(err) return res.json(err)
//         else{

//         if(data.length>0){
//             res.send(data);
//         } else {
//             res.send({ message: "No Hotel in the desired city"});
//         }
//     }
//     })

// })

app.get("/hotel" , (req , res)=>{

    const q = "SELECT * FROM `hotel`" ;

    db.query(q, (err , data)=>{
        if(err) return res.json(err)
        else{

        if(data.length>0){
            res.send(data);
        } else {
            res.send({ message: "No Hotel in the desired city"});
        }
    }
    })

})

app.get("/planes" , (req , res)=>{

    const q = "SELECT * FROM `plane`" ;

    db.query(q, (err , data)=>{
        if(err) return res.json(err)
        else{

        if(data.length>0){
            res.send(data);
        } else {
            res.send({ message: "No Plane"});
        }
    }
    })

})

app.get("/events" , (req , res)=>{

    const q = "SELECT * FROM `events`" ;

    db.query(q, (err , data)=>{
        if(err) return res.json(err)
        else{

        if(data.length>0){
            res.send(data);
        } else {
            res.send({ message: "No event"});
        }
    }
    })

})



// it will show all the rooms of a selected hotel 
app.get("/searched" , (req , res)=>{
    var value1 = req.body.hid;
    var q = "SELECT * FROM `room` where  `hid` = ?" ;

    db.query(q, [value1] , (err , data)=>{
        if(err) return res.json(err)
        else{

        if(data.length>0){
            rid = value1 ;
            res.send(data);
        } else {
            res.send({ message: "No Hotel in the desired city"});
        }
    }
    })

})
app.get("/hotel/byID/:id" , (req , res)=>{
    const id = req.params.id;
    const q = "SELECT * FROM `room` where `booked` = 'no' and `hid` = ?";

    db.query(q, [id], (err , data)=>{
        if(err) return res.json(err)
        else{

        if(data.length>0){
            res.send(data);
        } else {
            res.send({ message: "No Room in the desired city"});
        }
    }
    })

})

app.get("/account/byid/:idusers" , (req , res)=>{
    const idusers = req.params.idusers;
    const q = "select * from `users`,`registration` where `users`.`idusers` = `registration`.`userid` having `users`.`idusers` = ?"; 

    db.query(q, [idusers], (err , data)=>{
        if(err) return res.json(err)
        else{

        if(data.length>0){
            res.send(data);
        } else {
            res.send({ message: "No person in the desired city"});
        }
    }
    })

})


app.post("/ticket/hotel", (req,res)=>{
    const q = "insert into `registration` (`userid`,`rid`) values (?)";
    const values = [
        req.body.ppid,
        req.body.id,
    ];
    db.query(q, [values], (err , data)=>{
        if(err) return res.json(err)
            return res.json("ticket has been created sucesfully");
    }); 
    
});

app.post("/ticket/room", (req,res)=>{
    const rid =   req.body.rid ;
    db.query(
        "UPDATE `bookbuddy`.`room` SET `booked` = 'yes' WHERE `rid` = ?",
        [rid],
        (err,result) => {
            if (err) {
                res.send({ err: err });
            }
        }
    );
});

app.post("/ticket/plane", (req,res)=>{
    const q = "insert into `registration` (`userid`,`pid`) values (?)";
    const values = [
        req.body.ppid,
        req.body.pid,
    ];
    db.query(q, [values], (err , data)=>{
        if(err) return res.json(err)
            return res.json("ticket has been created sucesfully");
    }); 
    
});


app.post("/ticket/plane", (req,res)=>{
    const q = "insert into `registration` (`userid`,`eid`) values (?)";
    const values = [
        req.body.ppid,
        req.body.eid,
    ];
    db.query(q, [values], (err , data)=>{
        if(err) return res.json(err)
            return res.json("ticket has been created sucesfully");
    }); 
    
});



// rooms filter 
var rid = 3 ;
app.get("/room" , (req , res)=>{
    var value1 = req.body.rtype;
    var value2 = req.body.price;
    var value3 = req.body.bed;

    var q = "SELECT * FROM `room` where `hid` = ? and (`rtype` = ? or `price` = ? or `bed` = ?) "  ;
    if(value1.length <= 0 && value2.length <= 0 && value3.length <= 0 ){
        q = "SELECT * FROM `room` where `hid` = ?" ;
    }
    else if(value2.length <= 0 && value1.length <= 0 ){
        q = "SELECT * FROM `room` where `hid` = ? and `bed` = ?" ;
        value1 = value3 ;
    }else if(value1.length <= 0 && value3.length <= 0 ){
        q = "SELECT * FROM `room` where `hid` = ? and `price` = ?" ;
        value1 = value2 ;
    }else if(value2.length <= 0 && value3.length <= 0 ){
        q = "SELECT * FROM `room` where `hid` = ? and `rtype` = ?" ;
    }else if(value2.length <= 0 ){
        q = "SELECT * FROM `room` where `hid` = ? and (`rtype` = ? or `bed` = ?)" ;
        value2 = value3 ;
    }else if(value1.length <= 0 ){  
        q = "SELECT * FROM `room` where `hid` = ? and (`price` = ? or `bed` = ?)" ;
        value1 = value2  ;
        value2 = value3 ;
    }else if(value3.length <= 0  ){
        q = "SELECT * FROM `room` where `hid` = ? and (`rtype` = ? or `price` = ?)" ;
     }else {
        q = "SELECT * FROM `room` where `hid` = ? and  (`rtype` = ? or `price` = ? or `bed` = ?)" ;
     }

    db.query(q, [rid , value1 , value2 , value3] , (err , data)=>{
        if(err) return res.json(err)
        else{

        if(data.length>0){
            res.send(data);
        } else {
            res.send({ message: "No Hotel in the desired city"});
        }
    }
    })

})


// app.get("/planess" , (req , res)=>{
//     var value1 = req.body.ptype;
//     var value2 = req.body.start;
//     var value3 = req.body.price;

//     var q = "SELECT * FROM `plane` where `ptype` = ? or `start` = ? or `price` = ?" ;
//     if(value1.length <= 0 && value2.length <= 0 && value3.length <= 0 ){
//         q = "SELECT * FROM `plane`" ;
//     }
//     else if(value2.length <= 0 && value1.length <= 0 ){
//         q = "SELECT * FROM `plane` where `price` = ?" ;
//         value1 = value3 ;
//     }else if(value1.length <= 0 && value3.length <= 0 ){
//         q = "SELECT * FROM `plane` where `start` = ?" ;
//         value1 = value2 ;
//     }else if(value2.length <= 0 && value3.length <= 0 ){
//         q = "SELECT * FROM `plane` where `ptype` = ?" ;
//     }else if(value2.length <= 0 ){
//         q = "SELECT * FROM `plane` where `ptype` = ? or `price` = ?" ;
//         value2 = value3 ;
//     }else if(value1.length <= 0 ){
//         q = "SELECT * FROM `plane` where `start` = ? or `price` = ?" ;
//         value1 = value2  ;
//         value2 = value3 ;
//     }else if(value3.length <= 0  ){
//         q = "SELECT * FROM `plane` where `ptype` = ? or `start` = ?" ;
//      }else {
//         q = "SELECT * FROM `plane` where `ptype` = ? or `start` = ? or `price` = ?" ;
//      }

//     db.query(q, [value1 , value2 , value3] , (err , data)=>{
//         if(err) return res.json(err)
//         else{

//         if(data.length>0){
//             res.send(data);
//         } else {
//             res.send({ message: "No such plane "});
//         }
//     }
//     })

// })

// event 


app.get("/event" , (req , res)=>{
    var value1 = req.body.ename;
    var value2 = req.body.eseats;
    var value3 = req.body.etype;

    var q = "SELECT * FROM `events` where `ename` = ? or `eseats` = ? or `etype` = ?" ;
    if(value1.length <= 0 && value2.length <= 0 && value3.length <= 0 ){
        q = "SELECT * FROM `events`" ;
    }
    else if(value2.length <= 0 && value1.length <= 0 ){
        q = "SELECT * FROM `events` where `etype` = ?" ;
        value1 = value3 ;
    }else if(value1.length <= 0 && value3.length <= 0 ){
        q = "SELECT * FROM `events` where `eseats` = ?" ;
        value1 = value2 ;
    }else if(value2.length <= 0 && value3.length <= 0 ){
        q = "SELECT * FROM `events` where `ename` = ?" ;
    }else if(value2.length <= 0 ){
        q = "SELECT * FROM `events` where `ename` = ? or `etype` = ?" ;
        value2 = value3 ;
    }else if(value1.length <= 0 ){
        q = "SELECT * FROM `events` where `eseats` = ? or `etype` = ?" ;
        value1 = value2  ;
        value2 = value3 ;
    }else if(value3.length <= 0  ){
        q = "SELECT * FROM `events` where `etype` = ? or `eseats` = ?" ;
     }else {
        q = "SELECT * FROM `events` where `ename` = ? or `eseats` = ? or `etype` = ?" ;
     }

    db.query(q, [value1 , value2 , value3] , (err , data)=>{
        if(err) return res.json(err)
        else{

        if(data.length>0){
            res.send(data);
        } else {
            res.send({ message: "No such plane "});
        }
    }
    });

});

// app.get("/plane" , (req , res)=>{
//     var value1 = req.body.ptype;
//     var value2 = req.body.start;
//     var value3 = req.body.price;

//     var q = "SELECT * FROM `hotel` where `ptype` = ? or `start` = ? or `price` = ?" ;
//     if(value1.length <= 0 && value2.length <= 0 && value3.length <= 0 ){
//         q = "SELECT * FROM `plane`" ;
//     }
//     else if(value2.length <= 0 && value1.length <= 0 ){
//         q = "SELECT * FROM `plane` where `price` = ?" ;
//         value1 = value3 ;
//     }else if(value1.length <= 0 && value3.length <= 0 ){
//         q = "SELECT * FROM `plane` where `start` = ?" ;
//         value1 = value2 ;
//     }else if(value2.length <= 0 && value3.length <= 0 ){
//         q = "SELECT * FROM `plane` where `ptype` = ?" ;
//     }else if(value2.length <= 0 ){
//         q = "SELECT * FROM `plane` where `ptype` = ? or `price` = ?" ;
//         value2 = value3 ;
//     }else if(value1.length <= 0 ){
//         q = "SELECT * FROM `plane` where `start` = ? or `price` = ?" ;
//         value1 = value2  ;
//         value2 = value3 ;
//     }else if(value3.length <= 0  ){
//         q = "SELECT * FROM `plane` where `ptype` = ? or `start` = ?" ;
//      }else {
//         q = "SELECT * FROM `plane` where `ptype` = ? or `start` = ? or `price` = ?" ;
//      }

//     db.query(q, [value1 , value2 , value3] , (err , data)=>{
//         if(err) return res.json(err)
//         else{

//         if(data.length>0){
//             res.send(data);
//         } else {
//             res.send({ message: "No such plane "});
//         }
//     }
//     })

// })

// event 



app.post("/regis" , (req , res)=>{
    // var value1 = req.body.userid;
    // var value2 = req.body.pid;
    // var value3 = req.body.hid;
    // var value4 = req.body.eid;
    var values = [
        req.body.userid,
        req.body.pid,
        req.body.hid,
        req.body.eid
    ]
    var q = "insert into `registration` (`userid`, `pid`,`hid`,`eid`) values (?)" ;
    db.query(q, [values], (err , data)=>{
        if(err) return res.json(err)
        else return res.json(data);
    }); 
});

// app.get("/ausers", (req, res) => {
//     const q = "SELECT * FROM `users`";
//     db.query(q, (err, data) => {
//       if (err) {
//         console.log(err);
//         return res.json(err);
//       }
//       return res.json(data);
//     });
//   });




// app.post("/users/login", (req,res)=>{
//     const q = "select * from `users` where `email` = ?";

//     const values = [
//         req.body.email
//     ];
//     db.query(q, [values], (err , data)=>{
//         if(err) return res.json(err)
//             return res.send(result),res.json("user has been logged in sucesfully");
//     }); 
// });


// app.post("/users", (req,res)=>{
//     fname =  req.body.fname;
//     lname =  req.body.lname;
//     email =  req.body.email;
//     password = req.body.password;


//     db.query("insert into `users` (`fname`,`lname`,`email`,`password`) values (?)",
//     [fname,lname,email,password],
//     (err,result) => {
//         console.log(err);
//     }
//     );
// });





app.listen(8800, ()=>{
    console.log("connected to backend")
})