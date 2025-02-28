import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Category.css';
import { motion } from 'framer-motion';

const CategoryItem = ({token}) => {
    const navigate = useNavigate();
    const [categories,setCategories]=useState([]);
    const fetchData =async()=>{
        const response=await fetch("https://api.spotify.com/v1/browse/categories", {
            headers: { Authorization: `Bearer ${token}` }});
        const data=await response.json();
        setCategories(data.categories.items);
    }
     useEffect(() => {
       if (token) {
         fetchData();
       }
     }, [token]);
  return (
    <motion.div
    className="container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
>
    <div className="cat-heading">
        <p>Categories</p>
    </div>

    <div className="categories-full">
        {categories.map((category, index) => (
            <motion.div
                className="category-card-full"
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} 
                onClick={() => navigate(`/category/${category.name}`)}
            >
                <img src={category.icons[0]?.url || "/default-category.jpeg"} alt={category.name} />
                <p className="title">{category.name}</p>
            </motion.div>
        ))}
    </div>
</motion.div>

  )
}

export default CategoryItem
