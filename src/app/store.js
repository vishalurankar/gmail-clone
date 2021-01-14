import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mail/mailSlice';
import userReducer from '../features/mail/userSlice';

export default configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
  },
});
