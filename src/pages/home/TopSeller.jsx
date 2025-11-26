import React, {  useState } from 'react'
import BookCard from '../book/BookCard';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';



const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"];
const TopSeller = () => {
  
  const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

  const {data: books = []} = useFetchAllBooksQuery();
  

  const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

  

  return (
    <div className='py-10'>
      <h2 className='text-3xl font-semibold mb-6'>Top sellers</h2>
      {/* category filter */}
      <div className='mb-8 flex items-center'>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category" id="category" className='border bg-[#EAEAEA] border-gray-300 rounded-md px-3 py-2 focus:outline-none'>
          {
            categories.map((categories, index) => {
              return (
                <option key={index} value={categories}>{categories}</option>
              )
            })
          }
        </select>
      </div>

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
          1180: {
            slidesPerView: 2,
            spaceBetween: 70,
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
          filteredBooks.length > 0 && filteredBooks.map((book, index) => {
            return (
              <SwiperSlide key={index}>
                <BookCard book={book} />
              </SwiperSlide>

            )
          })
        }
      </Swiper>


    </div>
  )
}

export default TopSeller
