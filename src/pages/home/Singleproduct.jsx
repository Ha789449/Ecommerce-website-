import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';

const Singproduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // Set the initial state to null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        const selectedProduct = data.find((p) => p.id == id); // Find the product by id
        setProduct(selectedProduct); // Set the product data
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
    window.scrollTo({top: 0, behavior: "smooth"})
  }, [id]);

  // Check if the product data is loaded before rendering
  if (!product) {
    return <div>Loading...</div>;
  }

  // Destructure product properties safely after checking product data is available
  const { title, category, image, price, status } = product;

  return (
    <div className='mt-28 max-w-screen-2xl mx-auto xl:px-28 px-4 container'>
      <div className='p-3 max-w-7xl m-auto'>
        <div className='mt-5'>
          <a href="/" className='text-gray-600 '>Home</a>
          <a href="/shop" className='text-black font-bold'> / Shop</a>
        </div>
        <div className='mt-2 sm:mt-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6  h-max'>
            <div>
              <img src={image} alt={title} className='w-full' />

            </div>
            <div>
              <h2 className='title text-left'>{title}</h2>
              <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto ratione nihil soluta doloribus illo praesentium tempore sit ipsum eum nesciunt quia magni odit totam, assumenda iure iste officiis blanditiis? Ipsa!
                quaerat alias reiciendis iste omnis enim. Ratione dolor inventore numquam. Beatae qui unde suscipit?</p>
              <span className='my-2 text-xl text-yellow-400 flex items-center gap-1 sm:my-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </span>
              <p className='text-xl text-red-500 font-semibold sm:text-2xl'>${price}</p>
              <div className='mt-3'>
                <div className='flex flex-col w-full text-left gap-2'>
                  <label className='font-semibold'>Quantity</label>
                  <input type="number" name="price" id="price" defaultValue={1} required className='border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md p-0 py-3 px-4 md:px-4 md:py-3  focus:border-red-500' />
                </div>
                <div className='w-full text-left my-4' >
                  <button className='flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6'><span>Confirm order</span><FaArrowAltCircleRight/></button>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='text-black/75  mt-12'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ad alias explicabo id inventore a optio aspernatur accusamus aliquid, in cumque maxime atque perspiciatis. Sequi repudiandae doloremque </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ad alias explicabo id inventore a optio aspernatur accusamus aliquid, in cumque maxime atque perspiciatis. Sequi repudiandae doloremque </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ad alias explicabo id inventore a optio aspernatur accusamus aliquid, in cumque maxime atque perspiciatis. Sequi repudiandae doloremque </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ad alias explicabo id inventore a optio aspernatur accusamus aliquid, in cumque maxime atque perspiciatis. Sequi repudiandae doloremque </p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus ad alias explicabo id inventore a optio aspernatur accusamus aliquid, in cumque maxime atque perspiciatis. Sequi repudiandae doloremque </p>
        </div>
      
      
     
      </div>
    </div>
  );
};

export default Singproduct;
