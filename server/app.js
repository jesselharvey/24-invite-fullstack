const express = require("express")
const app = express()
const axios = require("axios")

let users = []
const going = []
const notGoing = []

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get("/api", (req, res) => {
  axios.get("https://randomuser.me/api/").then((resp) => {
    const user = resp.data.results[0]
    res.json({
      fName: user.name.first,
      lName: user.name.last,
      cell: user.cell,
      email: user.email,
      largePic: user.picture.large,
      mediumPic: user.picture.medium,
      thumbPic: user.picture.thumbnail,
      id: user.login.uuid,
      // why can't i do this ???????
      // vvv vvv vvv
      //   pictures: {
      //     large:  user.picture.large,
      //     medium: user.picture.medium,
      //     thumbnail: user.picture.thumbnail
      //   },
    })
    // console.log(user)
  })
})

// app.get("/api/going", (req, res) => {
//   res.json(going)
// })

app.post("/api/mark-invitee", (req, res) => {
  console.log("here it is", req.body)
  if (req.body.going === true) {
    going.push(req.body)
  } else {
    notGoing.push(req.body)
  }
  res.json({ success: true })
})

app.get("/api/going", (req, res) => {
//   console.log(going)
  res.json(going)
})
app.get("/api/notGoing", (req, res) => {
    // console.log(going)
    res.json(notGoing)
  })
// app.post("/api/", (req, res) => {
//     //    console.log(req.body)
//         res.json(res)
//     })

app.listen(3001, (req, res) => {
  console.log("listening on port 3001")
})
