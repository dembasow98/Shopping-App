import { Link } from 'react-router-dom';
import React from 'react';
//import apple from '../img/apple.png';

import { useDispatch } from 'react-redux';
import { basketActions } from '../store/basket-slice';



const Item = ({id, img, name, price}) => {

    const dispatch = useDispatch();
    
    const addToBasket = () =>{
        dispatch(basketActions.addToBasket({
            id,
            img,
            name,
            price
        }))
    };

    return (
        <div className="w-[300px]  max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-700 dark:border-gray-700">
            <Link to='/view:id'>
                <img className="p-8 rounded-t-lg" src={img} alt="product image"/>
            </Link>
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name} </h5>
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {price}</span>
                    <button onClick={addToBasket} className="text-white bg-blue-300 hover:bg-blue-500 focus:ring-2 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">Add to cart</button>
                </div>
            </div>
        </div>
    );
};


export default Item;