import { Component } from "react";
//import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';


const Basket = () => {

    //Get all the items in the basket
    const basketItems = useSelector(state => state.basket.itemsList);
    //Get the total price of the items in the basket
    const totalPrice = useSelector(state => state.basket.totalPrice);


    //dispatch
    const dispatch = useDispatch();

    //handle the click event of the + button
    const increaseItemQuantity = (item) => {
        //dispatch the action to add the item to the basket
        dispatch(basketItems.addToBasket({
            id: item.id,
            name: item.name,
            price: item.price
        }));
    }
    //handle the click event of the - button
    const decreaseItemQuantity = (item) => {

        dispatch(basketItems.removeFromBasket({

        }))
    }
     
     

    return (
        <div className="flex justify-center w-full h-screen">
            <div className="flex overflow-x-auto relative shadow-md sm:rounded-lg flex-col justify-center mt-10 items-center w-[80%] h-fit">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Product
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Qty
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            basketItems.map((item) => (
                            <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="p-4 w-32">
                                    <img src={item.img} alt="Product image"/>
                                </td>
                                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                    {item.name}
                                </td>
                                <td className="py-4 px-6">
                                    <div className="flex items-center space-x-3">
                                        <button onClick={increaseItemQuantity} className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                        </button>
                                        <div>
                                            <input value={item.quantity} type="number" id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required/>
                                        </div>
                                        <button onClick={decreaseItemQuantity} className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                            <span className="sr-only">Quantity button</span>
                                            <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                                    ${item.price}
                                </td>
                                <td className="py-4 px-6">
                                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center items-center dark:bg-gray-500 w-full text-xl font-medium">
                    <p className="my-2 text-slate-50 uppercase">Total: $ {totalPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default Basket;