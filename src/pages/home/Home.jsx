import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Product from './Product'
import Collection from './Collection'
import Bestseller from './Bestseller'
import Singleproduct from './Singleproduct'
import Newletter from './Newletter'
import Footer from '../../Components/Footer'
const Home = () => {
  return (
    <div>
    <Banner/>
    <Category/>
    <Product/>
    <Collection/>
    <Bestseller/>
    <Newletter/>
    <Singleproduct/>
    <Footer/>
    </div>
  )
}

export default Home
