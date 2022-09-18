import Item from '../components/Item';
import Products from '../data/products.json';
//import toast
import Toast from '../components/toast';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react';

import { sendBasketData } from '../store/basket-actions';


//Handle the notification rendering
let isFirstRender = true;


const Services = () => {

    /*const basketItems = useSelector((state) => state.basket.itemsList);
    console.log(basketItems);*/

    const notification = useSelector(state => state.ui.notification);
    //console.log("Notification: "+notification);
    const basket  = useSelector(state => state.basket);
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (isFirstRender) {
            isFirstRender = false;
            return;
        }
        //Send the request to the server
        //if (basket.changed) {
            dispatch(sendBasketData(basket));
        //}

    }, [basket, dispatch]);   

    return (
        <>
            <div className="SERVICES-CONTAINER flex flex-col justify-center items-center dark:text-white mt-6 "> 
                {/*This area is for alert message: */}
                {
                    notification && (
                        <div className="flex justify-center items-center mb-3 w-full">
                            <Toast type = {notification.type} message = {notification.message} />
                        </div>
                    )
                }
                <div className="SERVICES-TEXT flex flex-col justify-center items-center">
                    
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            Products.map((product) => (
                                <Item
                                    key={product.id}
                                    id={product.id}
                                    img={product.img}
                                    name={product.name}
                                    price={product.price}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
};


export default Services;