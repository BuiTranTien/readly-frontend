import React from 'react'
import BookCard from '../book/BookCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const Recommend = () => {
  

  const {data: books = []} = useFetchAllBooksQuery();
  return (
    <div className='py-16'>
      <h2 className='text-3xl font-semibold mb-6'>Recommended for you</h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={60}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180:{
            slidesPerView: 2,
            spaceBetween: 70,
          }
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        
        {
        books.length>0 && books.slice(8,16).map((book,index)=>{
          return (
            <SwiperSlide key={index}>
              <BookCard  book={book}/>
            </SwiperSlide>
            
          )
        })
      }
      </Swiper>
    </div>
  )
}

export default Recommend
