import express from 'express'
const app = express();

const PORT = process.env.NODE_ENV == "production" ? "https://tonesapp.herokuapp.com" : 8001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static('public'))





