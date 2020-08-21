const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, resp) => {
  resp.send({
    message: "Hello"
  })
})

app.listen(() => {
  console.log('listening on port', port)
})