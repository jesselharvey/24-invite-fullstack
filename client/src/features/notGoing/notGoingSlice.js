import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const notGoingSlice = createSlice({
  name: 'notGoing',
  initialState: {
    userList: [],
  },
  reducers: {
    asyncFetchNotGoing: (state, action) => {
      state.userList = action.payload
    }
  }
})

export const { asyncFetchNotGoing } = notGoingSlice.actions

export const fetchNotGoing = () => (dispatch) => {
  axios.get('/api/notGoing').then(resp => {
    console.log(resp.data)
    dispatch(asyncFetchNotGoing(resp.data))
  })
}

export const selectUsersNotGoing = (state) => state.notGoing.userList

export default notGoingSlice.reducer