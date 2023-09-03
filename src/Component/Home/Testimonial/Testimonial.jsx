import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import './Testimonial.css'
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
    return (
        <>
            <section className="py-5">
                <SectionTitle subTitle={"Customers Say"} title={"Review"}></SectionTitle>

                <div className="container">
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper mt-4">
                        <SwiperSlide>Slide 1</SwiperSlide>

                        {
                            review.map(review =>
                                <SwiperSlide key={review._id}>


                                    <div className="reviewinfo text-center">

                                        <div style={{ maxWidth: 180, margin: '0 auto' }} className='mt-4'>
                                            <Rating
                                                style={{ maxWidth: 180 }}
                                                value={review.rating}
                                                readOnly
                                            ></Rating>
                                        </div>

                                        <p className='details'>{review.details}</p>
                                        <h5>{review.name}</h5>
                                    </div>

                                </SwiperSlide>
                            )
                        }

                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default Testimonial;