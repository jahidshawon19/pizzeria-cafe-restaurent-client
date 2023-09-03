import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import './HomeMenu.css';
import SingleHomeMenu from "./SingleHomeMenu";

const HomeMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data => setMenu(data))
    },[])
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
                  <button className="btn btn-outline-warning">View Full Menu</button>
                  </div>
                </div>
            
            </section>  
        </>
    );  
};

export default HomeMenu;