import { createSlice } from "@reduxjs/toolkit";


const basketSlice = createSlice({
    name: 'basket',
    initialState:{
        itemsList: [],
        totalQuantity: 0,
        showBasket: false,
        totalPrice: 0
    },
    reducers:{
        addToBasket(state, action){
            const newItem = action.payload;
            //if the item has already been added: increase it's quantity by 1
            const sameItem = state.itemsList.find((item) => item.id === newItem.id);

            if(sameItem){ //The item already exists in the basket
                sameItem.quantity++;
                sameItem.totalPrice += newItem.price;
              
            }else{ //The item is new to the basket
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
                //update the total quantity
                state.totalQuantity++;
            }
            //update the total price
            state.totalPrice += newItem.price;

        },
        removeFromBasket(state, action){
            const id = action.payload;
            const sameItem = state.itemsList.find((item) => item.id === id);
            

            if(sameItem.quantity === 1){
                state.itemsList = state.itemsList.filter((item) => item.id !== id);
                state.totalQuantity--;
            }else{
                sameItem.quantity--;
                sameItem.totalPrice -= sameItem.price;
            }
            state.totalPrice -= sameItem.price;

        },
        //Delete totally the item from the basket
        deleteItemFromBasket(state, action){
            const id = action.payload;
            const sameItem = state.itemsList.find((item) => item.id === id);
            state.itemsList = state.itemsList.filter((item) => item.id !== id);
            state.totalPrice -= sameItem.totalPrice;
            state.totalQuantity--;
        },
        
        setShowBasket(state){
            state.showBasket = true
        }
    }
});

export const basketActions = basketSlice.actions;

export default basketSlice;