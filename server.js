const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
// app.use('/static', express.static('public'))


app.get('/', (req, res) => {
//   res.send('서버 점검중입니다!')
    res.sendFile(__dirname+'/public/index.html')
})

app.get('/join', (req, res) => {
    res.sendFile(__dirname+'/public/register.html')
})

app.get('/cs', (req, res) => {
    res.sendFile(__dirname+'/public/customer.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname+'/public/login.html')
})

app.get('/add_user', (req, res) => {
    res.send("서비스 준비중입니다!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})