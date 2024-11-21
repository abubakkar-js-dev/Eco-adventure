// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Keyboard, Pagination, Navigation,Autoplay } from 'swiper/modules';
import SingleSlide from './SingleSlide';
import { useContext } from 'react';
import { BlogsContext } from '../pages/Home';

const Banner = () => {

  // const allBlogs = useLoaderData();
  const allBlogs = useContext(BlogsContext);
  const sliderBlogs = allBlogs.slice(0,6);

  return (
    <div className='mb-12 md:mb-16 lg:mb-[100px]'>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        {sliderBlogs.map(blog => <SwiperSlide key={blog.id}>
            <SingleSlide blog={blog} />
        </SwiperSlide>)}
    
      </Swiper>
    </div>
  );
}

export default Banner
