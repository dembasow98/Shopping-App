
import Item from '../components/Item';

const Services = () => {
    return (
        <>
            <div className="SERVICES-CONTAINER flex flex-col justify-center items-center dark:text-white mt-6"> 
                <div className="SERVICES-TEXT flex flex-col justify-center items-center">
                    
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
            </div>
        </>
    )
};


export default Services;