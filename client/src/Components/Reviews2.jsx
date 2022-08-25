import React from 'react'
import { useContext, useEffect, useState } from 'react'
import BusContext from '../context/buses/busContext'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Reviews2 = () => {

    const [reviews, setreviews] = useState([])

    let context = useContext(BusContext);
    const { fetchallreviews } = context;


    useEffect(() => {

        async function fetchData() {
            const reviewsdata = fetchallreviews();
            const rdata = await reviewsdata;
            setreviews(rdata);
          }
          fetchData();
    }, [])


    return (
        <>
            <div id="reviewsSection">
                <h1 className="head">Clients's Review</h1>
                <div className="col-md-9">
                    <div className="reviews">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                        >

                            {reviews.map((val, index) => {
                                return <>
                                    <SwiperSlide className="carousel-item active" key={index}>
                                        <div className="reviewBox">
                                            <img src="../images/avatar.svg" alt="" className='clientImg' />
                                            <h4 className="clientName">{reviews[index].username}</h4>
                                            <p className="client-review text-center">
                                            {reviews[index].userreview}
                                            </p>
                                            {/* <img src="../images/star.png" alt="" className="stars" /> */}
                                        </div>
                                    </SwiperSlide>
                                </>
                            })}

                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews2;
