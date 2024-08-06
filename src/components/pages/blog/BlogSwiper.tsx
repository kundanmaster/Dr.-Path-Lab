'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, A11y} from 'swiper/modules';

const BlogSwiper = () => {
    return (
        <Swiper className="mt-10"
            modules={[Navigation, Pagination, A11y]}
            loop={true}
            spaceBetween={50}
            slidesPerView={3}
            breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
            pagination={{ clickable: true }}
        >
            <SwiperSlide >
                <div className="bg-white shadow-lg rounded-md ">
                    <div className="p-5">
                        <div className="text-[.85rem] bg-[#F1F6FF] w-fit py-2 px-3 rounded-full">
                            Heart Health
                        </div>
                        <h4 className="text-md text-blue font-medium mt-3 text-[#1F2259]">The 5 Best questions to  Ask
                            Your Cardiologist</h4>
                        <hr className="my-3" />
                        <p className="text-sm">Dr. Path cares Has Created Tech Enabled Processes That Ensure That The Customers Entire Journey From Booking To Report Delivery Is Seamless And Simplified. Through Our Proprietary s Seamless And Simplified. Through Our Proprietary View More </p>
                    </div>
                    <img src="images/blogpost.webp" width={200} height={200} alt="" className="w-full mt-5" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="bg-white shadow-lg rounded-md">
                    <div className="p-5">
                        <div className="text-[.85rem] bg-[#F1F6FF] w-fit py-2 px-3 rounded-full">
                            Heart Health
                        </div>
                        <h4 className="text-md text-blue font-medium mt-3 text-[#1F2259]">The 5 Best questions to  Ask
                            Your Cardiologist</h4>
                        <hr className="my-3" />
                        <p className="text-sm">Dr. Path cares Has Created Tech Enabled Processes That Ensure That The Customers Entire Journey From Booking To Report Delivery Is Seamless And Simplified. Through Our Proprietary s Seamless And Simplified. Through Our Proprietary View More </p>
                    </div>
                    <img src="images/blogpost.webp" width={200} height={200} alt="" className="w-full mt-5" />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="bg-white shadow-lg rounded-md">
                    <div className="p-5">
                        <div className="text-[.85rem] bg-[#F1F6FF] w-fit py-2 px-3 rounded-full">
                            Heart Health
                        </div>
                        <h4 className="text-md text-blue font-medium mt-3 text-[#1F2259]">The 5 Best questions to  Ask
                            Your Cardiologist</h4>
                        <hr className="my-3" />
                        <p className="text-sm">Dr. Path cares Has Created Tech Enabled Processes That Ensure That The Customers Entire Journey From Booking To Report Delivery Is Seamless And Simplified. Through Our Proprietary s Seamless And Simplified. Through Our Proprietary View More </p>
                    </div>
                    <img src="images/blogpost.webp" width={200} height={200} alt="" className="w-full mt-5" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-white shadow-lg rounded-md">
                    <div className="p-5">
                        <div className="text-[.85rem] bg-[#F1F6FF] w-fit py-2 px-3 rounded-full">
                            Heart Health
                        </div>
                        <h4 className="text-md text-blue font-medium mt-3 text-[#1F2259]">The 5 Best questions to  Ask
                            Your Cardiologist</h4>
                        <hr className="my-3" />
                        <p className="text-sm">Dr. Path cares Has Created Tech Enabled Processes That Ensure That The Customers Entire Journey From Booking To Report Delivery Is Seamless And Simplified. Through Our Proprietary s Seamless And Simplified. Through Our Proprietary View More </p>
                    </div>
                    <img src="images/blogpost.webp" width={200} height={200} alt="" className="w-full mt-5" />
                </div>
            </SwiperSlide>
         
        </Swiper >
        
    );
};

export default BlogSwiper;
