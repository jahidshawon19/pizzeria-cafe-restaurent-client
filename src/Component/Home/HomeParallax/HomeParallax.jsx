import './HomeParallax.css';
const HomeParallax = () => {
    return (
        <>
            <section className="featured-item text-light py-5">
                <div className="container">
                   
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="https://images.pexels.com/photos/2899737/pexels-photo-2899737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded" alt="" />
                        </div>
                        <div className="col-lg-6 text-light">
                            <p>Discover</p>
                            <h2>Pizzeria Cafe!</h2>
                            <p>Welcome to Pizzeria Cafe, where every bite tells a delicious story! Indulge in our mouthwatering pizzas crafted with passion, paired with the finest coffee and a warm, inviting ambiance. It's more than a meal; it's an experience!</p>
                            <button className="btn btn-warning">Order Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeParallax;