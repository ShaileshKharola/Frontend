import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products,search,showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productsCopy = [...products];
    if( showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };
  const sortProduct=()=>{
    let fpCopy=filterProducts.slice();
    switch(sortType){
      case "low-high":
        setFilterProducts(fpCopy.sort((a,b)=>a.price-b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a,b)=>b.price-a.price)); 
        break;
      default:
        applyFilter();
        break;
    }
  }
  /* re-filter whenever a checkbox changes */
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);
  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* ------------- Filter panel ------------- */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img className={`h-3 sm:hidden transition-transform ${showFilter ? "rotate-90" : ""}`}src={assets.dropdown_icon} alt=""
          />
        </p>

        {/* Category */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-1 text-sm font-light text-gray-700">
            {["Men", "Women", "Kids"].map((label) => (
              <label key={label} className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={label}
                  onChange={toggleCategory}
                  checked={category.includes(label)}
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* Sub-category */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-1 text-sm font-light text-gray-700">
            {["Topwear", "Bottomwear", "Winterwear"].map((label) => (
              <label key={label} className="flex gap-2">
                <input
                  className="w-3"
                  type="checkbox"
                  value={label}
                  onChange={toggleSubCategory}
                  checked={subCategory.includes(label)}
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* ------------- Products grid ------------- */}
      <div className="flex-1">

  <div className='flex justify-between text-sm sm:text-base mb-2'>
    <Title text1={'ALL'} text2={'COLLECTIONS'} />
    <select onChange={(e)=> setSortType(e.target.value)} className='border border-gray-300 px-1 py-0.5 text-xs sm:text-sm'>
      <option value="relevant">Sort by: Relevant</option>
      <option value="low-high">Sort by: Low–High</option>
      <option value="high-low">Sort by: High–Low</option>
    </select>
  </div>


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
