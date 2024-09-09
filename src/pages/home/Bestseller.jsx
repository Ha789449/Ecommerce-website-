
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Bestseller = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("products.json").then(res=> res.json()).then(data=> setProducts(data))
    },[])
 const bestSellers = products.filter((item)=> item.status=== "Best Selers")
 console.log(bestSellers)

    return (
        <div className='max-w-screen-2xl mx-auto xl:px-28 px-4 container '>
            <div className='text-center'>
                <h2 className='title'>Best Sellers</h2>
                <p className='text-blac/75 mx-auto mb-8 md:w-2/3 capitalize'>Discover our top-rated best sellers, featuring exclusive, high-demand products loved by customers. From fast-selling favorites to premium, handpicked selections, these iconic items are trending and must-have for every collection.</p>
            </div>
            {/* Best seller product cards  */}
           <div className='mb-16'>
           <Swiper
           slidesPerView={1}
        spaceBetween={10}
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            bestSellers.map((product)=>(
                <SwiperSlide key={product.id}>
                    <Link to={`/shop/${product.id}`}>
              <img src={product.image} alt="" className='mx-auto w-full hover:scale-105 transition-all duration-400'/>
            </Link>
            <div className='mt-4 px-4'>
             <h4 className='text-base font-semibold mb-2'>{product.title}</h4>
             <div className='flex justify-between'>
                <p className='text-black/50'>{product.category}</p>
                <p className='font-semibold'>${product.price}</p>
             </div>
            </div>
                </SwiperSlide>
            ))
        }
        
       
      </Swiper>
           </div>
        </div>
    )
}

export default Bestseller
