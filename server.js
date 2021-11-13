const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(function(req, res, next) {
//   req.header("Content-Type", "application/json");
//   next();
// });

app.get('/', (req, res) => {
  
  res.setHeader("Content-Type", "text/html");

  res.sendFile(__dirname + '/views/index.html')
})

app.get('/register', (req, res) => {
  res.header("Content-Type", "text/html");

  res.sendFile(__dirname + '/views/register.html')
})

app.post('/register', (req, res) => {
  console.log(req.body)

  res.json({
    'message': 'todo ok',
    'data': req.body
  })
})

app.get('/files', (req, res) => {
  res.header("Content-Type", "text/html");

  res.sendFile(__dirname + '/views/files.html')
})

app.post('/files', (req, res) => {
  console.log(req.body)
  console.log(req.get('content-type'))

  res.header("Content-Type", "text/plain");
  console.log(res.get('content-type'))

  res.send('todo bien')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

