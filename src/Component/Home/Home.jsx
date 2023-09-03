import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import {Helmet} from "react-helmet";
import HomeParallax from "./HomeParallax/HomeParallax";
import HomeMenu from "./HomeMenu/HomeMenu";
import Testimonial from "./Testimonial/Testimonial";



const Home = () => {
    return (
        <>
            <Helmet>
                <title>Pizzeria Cafe | Home </title>
            </Helmet>
         
            <Banner></Banner>
            <Category></Category>
            <HomeParallax></HomeParallax>
            <HomeMenu></HomeMenu>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;