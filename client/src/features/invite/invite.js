import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// import axios from "axios"
import { fetchGoing, selectUsersGoing } from "../going/goingSlice"
import { fetchNotGoing, selectUsersNotGoing } from "../notGoing/notGoingSlice"
import { Link } from 'react-router-dom'
import { fetchUsers, selectUser, toGoing, toNotGoing, selectGoingList, selectNotGoingList } from "./inviteSlice"
import './invite.css'
export function InviteHome() {
  
  const dispatch = useDispatch()

  const user = useSelector(selectUser)
  const going = useSelector(selectUsersGoing)
  const notGoing = useSelector(selectUsersNotGoing)

  // let [user, setUser] = useState({})
  
  console.log(going)
  console.log(notGoing)
  useEffect(() => {
    dispatch(fetchGoing())
    dispatch(fetchNotGoing())
    // axios.get('/api', (req, res) => {

      // axios.get("https://randomuser.me/api").then((resp) => {
      //   console.log('this is resp.data ',resp.data)
      // })
      //  console.log('this is res ',res)
      //  console.log('this is the req ',req)
      // }).then((resp) => {
      //   setUser(resp.data) 
        // console.log('this is resp.data ',user)
        dispatch(fetchUsers(user))
      }, []) 
      function handleRejectBtn(e) {
        e.preventDefault()
        dispatch(toNotGoing(user))
        // useEffect(() => {
          dispatch(fetchUsers(user))
        // }, [])
      }
      function handleAcceptBtn(e) {
        e.preventDefault()
        dispatch(toGoing(user))
        // useEffect(() => {
          dispatch(fetchUsers(user))
        // }, [])
      }
    // console.log(user)

  // })
  console.log(user)
  return (
    <div className="userContainer">
      <div className="buttonDiv">
        <Link to="/api/going"><button className="btn">Going: {going.length}</button></Link>
        <Link to="/api/notGoing"><button className="btn">Not going: {notGoing.length}</button></Link>
      </div>
      <img src={user.largePic} />
      <span>Name: {user.fName + " " + user.lName}</span>
      <span>Phone: {user.cell}</span>
      <span>Email: {user.email}</span>
      <div className="selButtonDiv">
        <button onClick={handleRejectBtn} className="rejectBtn">Reject</button>
        <button onClick={handleAcceptBtn} className="acceptBtn">Accept</button>
      </div>
    </div>

  )
}

// function InviteListHome() {
//   const [userList, setUserList] = useState([])

//   useEffect(() => {
//     console.log(userList)
//     axios
//     .get("https://randomuser.me/api/")
//     .then((resp) => setUserList(resp.data))
//   }, [])
//   return (
//     <div>
//       <span>You's a bitch</span>
//       {/* {userList.map((user) => {

//       })} */}
//     </div>
//   )
// }

// export default InviteListHome
