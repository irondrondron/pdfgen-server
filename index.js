import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'

const PORT = 4000
const DB_URL = 'mongodb+srv://dbUser:dbUserPassword@cluster0.gprot.mongodb.net/pdfgen?retryWrites=true&w=majority'

const app = express()
// const jsonParser = express.json()
app.use(express.json())
app.use(express.static('static'))
// app.use(express.urlencoded({ extended: false }));

app.use('/api', router)
// const httpServer = createServer(app)


async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    app.listen(PORT, () => console.log(`Connection to MongoDB was successful. Server ready at http://localhost:${PORT}`))
  } catch (err) {
    console.log(err)
  }
}

startApp()
//   .then((res) => {
//   httpServer.listen(PORT, () => {
//     console.log(`Connection to MongoDB was successful. Server ready at http://localhost:${PORT}`)
//   })
// })
//   .catch((err) => {
//     console.error('Error while connecting to MongoDB', err);
//   })

// app.get('/api/users', (req, res) => {
//   User.find({}, (req, res) => {
//     if (err) return console.log(err);
//     res.send(users)
//   })
// })

// app.post('/api/users', jsonParser, (req, res) => {
//   if (!req.body) return res.sendStatus(400)

//   const userFirstname = req.body.firstname
//   const userLastname = req.body.lastname
//   const userEmail = req.body.email
//   const userPhonenumber = req.body.phonenumber
//   const userLocation = req.body.location
//   const userSocial = req.body.social

//   const user = new User({
//     firstname: userFirstname,
//     lastname: userLastname,
//     email: userEmail,
//     phonenumber: userPhonenumber,
//     location: userLocation,
//     social: userSocial
//   })

//   user.save((err)=>{
//     if(err) return console.log(err);
//     res.send(user)
//   })
// })