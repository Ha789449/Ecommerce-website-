import React from 'react';

const Category = () => {
  const companyLogo = [
    { id: 1, img: "/images/company/brand1.png" },
    { id: 2, img: "/images/company/brand2.png" },
    { id: 3, img: "/images/company/brand3.png" },
    { id: 4, img: "/images/company/brand4.png" },
    { id: 5, img: "/images/company/brand5.png" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto xl:px-28 px-4 py-28 container">
    {/* Brand logo */}
      <div className='flex items-center justify-between gap-4 flex-wrap py-5'>
        {companyLogo.map(({ id, img }) => (
          <div key={id}>
            <img src={img} alt={`Brand ${id}`} />
          </div>
        ))}
      </div>
      {/* Category Brand */}
      <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
        <p className='font-bold uppercase md:-rotate-90 text-center bg-Black text-white md:p-1.5 p-2 rounded-s inline-flex'>Explore new and Popular styles</p>
   <div>
    <a href="/"><img src="/images/category/image1.png" alt="" className='w-full hover:scale-105 transition-all duration-200' /></a>
   </div>
   <div className='md:w-1/2 w-full '>
   <div className='grid grid-cols-2 gap-2'>
   <a href="/"><img src="/images/category/image2.png" alt=""className='w-full hover:scale-105 transition-all duration-200'/></a>
   <a href="/"><img src="/images/category/image3.png" alt=""className='w-full hover:scale-105 transition-all duration-200'/></a>
   <a href="/"><img src="/images/category/image4.png" alt=""className='w-full hover:scale-105 transition-all duration-200'/></a>
   <a href="/"><img src="/images/category/image5.png" alt=""className='w-full hover:scale-105 transition-all duration-200'/></a>
   </div>
   </div>
</div>
    </div>
  );
};

export default Category;
