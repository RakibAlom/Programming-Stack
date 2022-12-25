const express = require('express')
const cors = require('cors')

app.use(cors());

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Programming-Stack Server Running')
})

app.listen(port, () => {
  console.log(`Programming-Stack Listening On Port: ${port}`)
})