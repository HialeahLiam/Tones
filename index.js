import express from 'express'
const app = express();

const PORT = 8001;

// DEV
// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`)
// })

//DEPLOY
app.listen()

app.use(express.static('public'))





