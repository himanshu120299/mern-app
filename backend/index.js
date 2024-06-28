/*const mongoDB = require('./db');
const express = require('express')
const app = express()
const port = 5000

mongoDB();
global.foodData = require('./db')(function call(err, data, CatData) {
  // console.log(data)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})*/
const mongoDB = require('./db');
const express = require('express');
const app = express();
const port = 5000;

// Connect to MongoDB and fetch initial data
mongoDB()
  .then(() => {
    // Start setting up Express after MongoDB connection is established
    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      next();
    });

    app.use(express.json());

    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    app.use('/api/auth', require('./Routes/Auth'));

    app.listen(port, () => {
      console.log(`Example app listening on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if there is a connection error
  });
