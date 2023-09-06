import SectionBanner from "../Shared/SectionBanner/SectionBanner";
import useMenu from "../../Hooks/useMenu";
import OrderCard from "./OrderCard";
import { Helmet } from "react-helmet";

const Order = () => {
    const [menu] = useMenu()
    return (
        <>
            <Helmet>
                <title>Pizzeria Cafe | Order </title>
            </Helmet>
            <SectionBanner title={"Order"} img={"https://images.pexels.com/photos/4033404/pexels-photo-4033404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}></SectionBanner>

            <section className="order-section py-5">
                <div className="container">
                    <div className="row">
                        {
                            menu.map(item => <OrderCard
                                key={item._id}
                                items={item}
                            ></OrderCard>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Order;