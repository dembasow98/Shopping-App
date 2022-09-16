import { useSelector } from 'react-redux';
import Item from '../components/Item';
import Products from '../data/products.json';

const Services = () => {

    const basketItems = useSelector((state) => state.basket.itemsList);
    console.log(basketItems);

    return (
        <>
            <div className="SERVICES-CONTAINER flex flex-col justify-center items-center dark:text-white mt-6 "> 
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