const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
const mongoDB = require("./db")

mongoDB();

app.use(cors({
    origin: function (origin, callback) {
      callback(null, origin);
    },
    credentials:true
}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json());
app.use('/api',require("./Routes/createUser"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})