import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import inviteReducer from '../features/invite/inviteSlice';
import goingReducer from '../features/going/goingSlice'
import notGoingReducer from '../features/notGoing/notGoingSlice'

export default configureStore({
  reducer: {
    // counter: counterReducer,
    invite: inviteReducer,
    going: goingReducer,
    notGoing: notGoingReducer,
  },
});
