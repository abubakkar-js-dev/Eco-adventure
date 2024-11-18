// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';
import SingleSlide from './SingleSlide';

const Banner = () => {

  const allBlogs = useLoaderData();
  const sliderBlogs = allBlogs.slice(0,6);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper h-[450px]"
      >
        {sliderBlogs.map(blog => <SwiperSlide key={blog.id}>
            <SingleSlide blog={blog} />
        </SwiperSlide>)}
    
      </Swiper>
    </>
  );
}

export default Banner
