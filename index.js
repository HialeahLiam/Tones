import express from 'express'
const app = express();

const PORT = 8001;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.use(express.static('public'))





