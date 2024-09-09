import { useState, useEffect } from 'react'
import { FaFilter } from 'react-icons/fa6';
import Card from '../../Components/Card';
import Category from './Category';

const Product = () => {

  const [products, setproducts] = useState([])
  const [filtereditems, setfiltereditems] = useState([])
  const [selectedCategory, setselectedCategory] = useState("all")
  const [sortOption, setSortOption] = useState("default")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        //  console.log(data)
        setproducts(data)
        setfiltereditems(data)
      } catch (error) {
        console.log("Error Fetching data :", error)
      }
    }
    fetchData()
  }, [])
  // filtering production

  const filterItems = (Category) => {
    const filtered = Category === "all" ? (products) : products.filter((item) => item.category === Category);
    setfiltereditems(filtered);
    setselectedCategory(Category);
  }
  // show All products
  const showAll = () => {
    setfiltereditems(products)
    selectedCategory("all")
  }
  // sorting Functionality
  const handleSortChange = (option) => {
    setSortOption(option)
    //  Logic for sorting
    let sortedItems = [...filtereditems]

    switch (option) {
      case "A-Z":
         sortedItems.sort((a, b) => a.title.localeCompare(b.title))
        break;
      case "Z-A":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title))
        break;
        case "low-to-high": 
        sortedItems.sort((a,b)=> a.price - b.price)
        break;
        case "high-to-low": 
        sortedItems.sort((a,b)=> b.price - a.price)
        break;
        default :
        break;
    }
    setfiltereditems(sortedItems)
  }

  return (
    <div className="max-w-screen-2xl mx-auto xl:px-28 px-4 pb-12">
      <h2 className='title'>Or Subscribe the newsletter</h2>


      {/* Product Cards */}
      <div>
        <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
          {/* Alli btns */}
          <div className='flex flex-row md:items-center justify-start flex-wrap md:gap-8 gap-4'>
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItems("Dress")}>Clothing</button>
            <button onClick={() => filterItems("Hoodies")}>Hodies</button>
            <button onClick={() => filterItems("Bag")}>Bags</button>
          </div>
          {/* Sorting Option */}
          <div className='flex justify-end rounded-sm mb-4'>
            <div className='bg-black p-2'>
              <FaFilter className='text-white h-4 w-4' />
            </div>
            <select
            id='sort'
            onChange={(e)=> handleSortChange(e.target.value)}
            value={sortOption}
            className='bg-black text-white px-2 py-1 rounded-sm '>
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low To High</option>
              <option value="high-to-low">High-to-Lowt</option>
            </select>
          </div>
        </div>



        <Card filtereditems={filtereditems} />
      </div>

    </div>
  )
}

export default Product;
