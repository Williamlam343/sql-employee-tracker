const express = require("express")
const mysql = require('mysql2');
const app = express();
const { clog } = require("./middleware/clog")
const PORT = process.env.PORT || 3001

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(clog)

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employees'
    },
    console.log(`Connected to the employees database.`)
);

app.get("/api/employees", (req, res) => {
    db.query("SELECT * FROM employee", function (err, results) {
        res.json(results)
    })
})


app.listen(PORT, console.info(`Listening at http://localhost:${PORT}`))
