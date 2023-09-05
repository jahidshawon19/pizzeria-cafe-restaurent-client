

const SingleHomeMenu = ({itemData}) => {

    const {title,img,price,description,category} = itemData
    return (
        <>
            <div className="col-lg-12 mt-4">
                <div className="menu-container d-flex align-items-center justify-content-center">
                    <div className="menu-image">
                        <img src={img} alt="" />
                    </div>
                    <div className="menu-title">
                        <a href="">{title}</a>
                        <p>{description}</p>
                        {/* <h6 className="text-warning">{category}</h6> */}
                    </div>

                    <div className="menu-price">
                     ..................................................................................................BDT {price}
                    </div>

                    
                </div>

                
            </div>

        </>
    );
};

export default SingleHomeMenu;