import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Category.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import cat1 from "../../../assets/category/pizza-1.jpg";
import cat2 from "../../../assets/category/pasta-1.jpg";
import cat3 from "../../../assets/category/biriyani-1.jpg";
import cat4 from "../../../assets/category/burger-1.jpg";
import cat5 from "../../../assets/category/fastFood-1.jpg";
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <>
            <section className="category-section py-5">
                <SectionTitle subTitle={"Order Online"} title={"What We Offer"}></SectionTitle>
                <div className="container mt-5">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"

                        
                    >
                        <SwiperSlide >



                            <div className="text-center" >
                                <img src={cat4} alt="" className='img-fluid cat-img rounded' />
                                <h3 className='text-danger mt-3'>Burger</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center">
                                <img src={cat2} alt="" className='img-fluid cat-img rounded' />
                                <h3 className='text-danger mt-3'>Pasta</h3>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="text-center">
                                <img src={cat3} alt="" className='img-fluid cat-img rounded' />
                                <h3 className='text-danger mt-3'>Biriyani</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="text-center">
                                <img src={cat1} alt="" className='img-fluid cat-img rounded' />
                                <h3 className='text-danger mt-3'>Pizza</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>

                            <div className="text-center">
                                <img src={cat5} alt="" className='img-fluid cat-img rounded' />
                                <h3 className='text-danger mt-3'>Asian</h3>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default Category;