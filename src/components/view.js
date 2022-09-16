

const View = ({item} ) => {

    return (
        <div className="view">
            <div className="view__container">
                <div className="view__image">
                    <img src={item.img} alt="product image"/>
                </div>
                <div className="view__info">
                    <h1>{item.name}</h1>
                    <h2>{item.price}</h2>
                </div>
            </div>
        </div>
    )
}

export default View;

