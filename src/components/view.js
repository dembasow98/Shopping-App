

const View = ({img, name, price}) => {

    return (
        <div className="flex justify-center w-full h-screen">
            <div className="flex overflow-x-auto relative shadow-md sm:rounded-lg flex-col justify-center mt-10 items-center w-[80%] h-fit">
                <div className="justify-center items-center">
                    <img src={img} alt="Product Image"/>
                </div>
                <div className="justify-center">
                    <h1>{name}</h1>
                    <h2>{price}</h2>
                </div>
            </div>
        </div>
    )
}

export default View;

