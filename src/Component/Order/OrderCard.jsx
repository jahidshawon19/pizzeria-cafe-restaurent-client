

const OrderCard = ({ items }) => {
    const { title, img, price, description, category } = items
    return (
        <>
            <div className="col-lg-4 mt-3">
                <div className="card" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}>
                    <img className="card-img-top" src={img} alt="Card image cap" />
                    <div className="card-body" >
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="card-text text-secondary">{price} Taka</p>
                            <p className="card-text text-danger"><small>{category}</small></p>
                        </div>
                        <a href="#" className="btn btn-primary">Add to Cart</a>

                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderCard;