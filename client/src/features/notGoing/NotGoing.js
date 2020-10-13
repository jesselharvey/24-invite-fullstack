import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchNotGoing, selectUsersNotGoing } from "./notGoingSlice"
import "./notGoing.css"

export function NotGoing() {
  const dispatch = useDispatch()

  const userList = useSelector(selectUsersNotGoing)

  console.log(userList)
  useEffect(() => {
    dispatch(fetchNotGoing())
  }, [])

  return (
    <div>
      <h1>Not Going: </h1>
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
