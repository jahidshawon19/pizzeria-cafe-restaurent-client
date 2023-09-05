
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import './HomeMenu.css';
import SingleHomeMenu from "./SingleHomeMenu";
import { Link } from "react-router-dom";
import useMenu from "../../../Hooks/useMenu";

const HomeMenu = () => {
    const [menu] = useMenu()
    return (
        <>
             <section className="home-menu-section py-5 bg-light">

                <SectionTitle subTitle={"Check Out"} title={"Our Menu"}></SectionTitle>

                <div className="container">
                    <div className="row mt-5">
                        {
                            menu.map(item=><SingleHomeMenu
                                key={item._id}
                                itemData = {item}
                            ></SingleHomeMenu>)
                        }

                        
                    </div>

                  <div className="text-center">
                  <Link className="btn btn-outline-warning" to="/menu">View Full Menu</Link>
                  </div>
                </div>
            
            </section>  
        </>
    );  
};

export default HomeMenu;