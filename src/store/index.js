import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import basketSlice from './basket-slice';


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        basket:basketSlice.reducer,
    }
});

export default store;