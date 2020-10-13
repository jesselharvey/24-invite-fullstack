import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGoing, selectUsersGoing } from "./goingSlice"
import "./going.css"

export function Going() {
  const dispatch = useDispatch()

  const userList = useSelector(selectUsersGoing)

  console.log(userList)
  useEffect(() => {
    dispatch(fetchGoing())
  }, [])

  return (
    <div>
      <h1>Going: </h1>
    <div id="userListContainer">
      {userList.map((user) => (
      <div className="userCard">
        <img src={user.largePic} />
        <span>Name: {user.fName + " " + user.lName}</span>
        <span>Phone: {user.cell}</span>
        <span>Email: {user.email}</span>
      </div>

      ))}
    </div>
    </div>
  )
}
