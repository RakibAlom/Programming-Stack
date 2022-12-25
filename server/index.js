const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Programming-Stack Server Running')
})

app.listen(port, () => {
  console.log(`Programming-Stack Listening On Port: ${port}`)
})