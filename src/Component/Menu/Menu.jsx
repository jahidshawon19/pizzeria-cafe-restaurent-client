import { Helmet } from "react-helmet";
import SectionBanner from "../Shared/SectionBanner/SectionBanner";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuCat from "./MenuCat";

const Menu = () => {

    const [menu] = useMenu()
    const pizza = menu.filter(item => item.category === 'pizza')
    const burger = menu.filter(item=>item.category === 'burger')

    return (
        <>
            <Helmet>
                <title>Pizzeria Cafe | Menu </title>
            </Helmet>
            <SectionBanner title={"Our Menu"} img={"https://preview.colorlib.com/theme/pato/images/bg-title-page-01.jpg.webp"}></SectionBanner>

            <section className="py-5">
                <div className="container">
                    <SectionTitle subTitle={"Check Out"} title={"Pizza"}></SectionTitle>
                    <div className="row">
                        <MenuCat items={pizza}></MenuCat>
                    </div>
                    <SectionTitle subTitle={"Check Out"} title={"Burger"}></SectionTitle>
                    <div className="row">
                        <MenuCat items={burger}></MenuCat>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;