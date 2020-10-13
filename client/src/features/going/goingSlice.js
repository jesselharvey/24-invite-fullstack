import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const goingSlice = createSlice({
  name: 'going',
  initialState: {
    userList: [],
  },
  reducers: {
    asyncFetchGoing: (state, action) => {
      state.userList = action.payload
    }
  }
})

export const { asyncFetchGoing } = goingSlice.actions

export const fetchGoing = () => (dispatch) => {
  axios.get('/api/going').then(resp => {
    console.log(resp.data)
    dispatch(asyncFetchGoing(resp.data))
  })
}

export const selectUsersGoing = (state) => state.going.userList

export default goingSlice.reducer