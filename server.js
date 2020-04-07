import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json()) // for parsing application/json

app.use(cors())

app.get('*', (req, res, next) => {
  res.send('Heroku Test')
})

// 加上 0.0.0.0 取得的 req.ip 就會是 ipv4 的
app.listen(PORT, () => {
    console.log(`listening on ${ PORT }`)
})