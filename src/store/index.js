import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import basketSlice from './basket-slice';
import uiSlice from './ui-slice';


const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        basket:basketSlice.reducer,
        ui: uiSlice.reducer
    }
});

export default store;