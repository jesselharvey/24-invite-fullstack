// import react from 'react'
import { createSlice } from "@reduxjs/toolkit"
// import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

export const inviteSlice = createSlice({
  name: "invite",
  initialState: {
    user: {},
    goingList: [],
    notGoingList: [],
  },
  reducers: {
    asyncUsersFetch: (state, action) => {
      state.user = action.payload
    },
    pushToGoing: (state, action) => {
      state.goingList.push(action.payload)
    },
    pushToNotGoing: (state, action) => {
      state.notGoingList.push(action.payload)
    },
  },
})

const { asyncUsersFetch, pushToGoing, pushToNotGoing } = inviteSlice.actions

export const fetchUsers = () => (dispatch) => {
  axios.get("/api").then((resp) => {
    const user = resp.data
    // user.title = user.name.title
    dispatch(asyncUsersFetch(user))
  })
}
export const toGoing = (user) => (dispatch) => {
  axios.post("/api/mark-invitee", { ...user, going: true }).then((resp) => {
    // const user = resp.data
    dispatch(pushToGoing(user))
  })
}
export const toNotGoing = (user) => (dispatch) => {
  axios.post("/api/mark-invitee", {...user, going: false }).then((resp) => {
    // const user = resp.data
    dispatch(pushToNotGoing(user))
  })
}

export const selectUser = (state) => state.invite.user
export const selectGoingList = (state) => state.invite.goingList
export const selectNotGoingList = (state) => state.invite.notGoingList

// export const useInvite = () => {
//   const user = useSelector((state) => state.invite.userList)
//   const dispatch = useDispatch()
//   return {
//     userList,
//     fetchUsers: () => dispatch(asyncUsersFetch()),
//   }
// }

export default inviteSlice.reducer
