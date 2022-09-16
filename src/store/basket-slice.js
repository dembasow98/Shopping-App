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

            if(sameItem){
                sameItem.quantity++;
                sameItem.price += newItem.price;
                //update the total price
                state.totalPrice += newItem.price;
            }else{
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
                //update the total quantity
                state.totalQuantity++;

                //update the total price
                state.totalPrice += newItem.price;
            }


        },
        removeFromBasket(state, action){
            const id = action.payload;
            const sameItem = state.itemsList.find((item) => item.id === id);
            

            if(sameItem.quantity === 1){
                state.itemsList = state.itemsList.filter((item) => item.id !== id);
            }else{
                sameItem.quantity--;
                sameItem.price -= sameItem.price;
            }
            //update the total quantity in the basket
            state.totalQuantity--;
            //update the total price of the items in the basket
            state.totalPrice -= sameItem.price;
        },
        setShowBasket(state){
            state.showBasket = true
        }
    }
});

export const basketActions = basketSlice.actions;

export default basketSlice;