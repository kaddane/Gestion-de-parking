

import express from "express";
import mysql from "mysql"
import cors from "cors"


const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "stage"
})


app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.json('hllo connnnnnnnnnnction')
})

app.listen(8800, () => {
    console.log("connnerct")
})

// --------------------  admin  ---------------------------------

app.get("/admin", (req, res) => {
    const sql = "SELECT * FROM admin"
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/admin", (req, res) => {
    const sql = "INSERT INTO admin (nameA, lastnameA, emailA, passwordA) VALUES (?)"
    const values = [
        req.body.name,
        req.body.lastname,
        req.body.email,
        req.body.password,
    ]

    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err)
    })
})

app.delete("/admin/:idAdmin", (req, res) => {
    const adminID = req.params.idAdmin
    const sql = "DELETE FROM admin WHERE idAdmin = ? "

    db.query(sql, [adminID], (err, data) => {
        if (err) return res.json(err)
    })
})


app.put("/admin/:idAdmin", (req, res) => {
    const adminID = req.params.idAdmin
    const sql = "UPDATE admin SET nameA = ?, lastnameA = ?, emailA = ?, passwordA = ? WHERE idAdmin = ? "
    const values = [
        req.body.nameA,
        req.body.lastnameA,
        req.body.emailA,
        req.body.passwordA,
    ]

    db.query(sql, [...values, adminID], (err, data) => {
        if (err) return res.json(err)
    })
})



// --------------------  modeles  ---------------------------------


app.get("/modeles", (req, res) => {
    const sql = "SELECT * FROM modeles"
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


// --------------------  parking  ---------------------------------


app.get("/parking", (req, res) => {
    const sql = "SELECT * FROM parking"
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


app.post("/parking", (req, res) => {
    const sql = "INSERT INTO parking (nameP, addressP, placeP) VALUES (?)"
    const values = [
        req.body.name,
        req.body.address,
        req.body.place,
    ];

    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json("nont")
    })
})



app.delete("/parking/:idpark", (req, res) => {
    const parkID = req.params.idpark
    const sql = "DELETE FROM parking WHERE idpark = ? "

    db.query(sql, [parkID], (err, data) => {
        if (err) return res.json(err)
    })
})


app.put("/parking/:idpark", (req, res) => {
    const parkID = req.params.idpark
    const sql = "UPDATE parking SET nameP = ?, addressP = ?, placeP = ? WHERE idpark = ? "
    const values = [
        req.body.nameP,
        req.body.addressP,
        req.body.placeP
    ]

    db.query(sql, [...values, parkID], (err, data) => {
        if (err) return res.json(err)
    })
})



// --------------------  reservation  ---------------------------------


app.get("/reservation", (req, res) => {
    const sql = "SELECT * FROM reservation"
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})
	
// app.get("/reservation/:idR", (req, res) => {
//     const resID = req.params.idR
//     const sql = "SELECT * FROM reservation WHERE idR = ? "
//     db.query(sql, [resID], (err, data) => {
//         if (err) return res.json(err)
//         return res.json(data)
//     })
// })
			

app.post("/reservation", (req, res) => {
    const sql = "INSERT INTO reservation (moduleCar, dateR, dateRI, matreculeCar, num_place, nameUser, cinUser, lastnameUser) VALUES (?)"
    const values = [
        req.body.moduleCar,
        req.body.dateR,
        req.body.dateRI,
        req.body.matreculeCar,
        req.body.num_place,
        req.body.nameUser,
        req.body.cinUser,
        req.body.lastnameUser
    ]

    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err)
    })
})


app.delete("/reservation/:idR", (req, res) => {
    const reservationID = req.params.idR
    const sql = "DELETE FROM reservation WHERE idR = ? "

    db.query(sql, [reservationID], (err, data) => {
        if (err) return res.json(err)
    })
})


app.put("/reservation/:idR", (req, res) => {
    const reservationID = req.params.idR
                                            
    const sql = "UPDATE reservation SET moduleCar = ?, dateR = ?, dateRI= ?, matreculeCar = ?, num_place = ?, nameUser = ?, cinUser = ?, lastnameUser = ? WHERE idR = ? "
    const values = [
        req.body.moduleCar,
        req.body.dateR,
        req.body.dateRI,
        req.body.matreculeCar,
        req.body.num_place,
        req.body.nameUser,
        req.body.cinUser,
        req.body.lastnameUser
    ]

    db.query(sql, [...values, reservationID], (err, data) => {
        if (err) return res.json(err)
    })
})










