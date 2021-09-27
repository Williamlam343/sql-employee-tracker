const express = require("express")
const app = express();
const { clog } = require("./middleware/clog")
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(clog)

app.listen(PORT, console.info(`Listening at http://localhost:${PORT}`))
