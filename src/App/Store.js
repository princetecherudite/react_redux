import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Services/Reducer/Reducers'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});