import React from 'react'
import CategoryItem from '../Components/CategoryItem/CategoryItem'
import Sidebar from '../Components/Sidebar/Sidebar'
import './Artist.css'

const Category = ({token}) => {
  return (
    <div >
        <Sidebar/>
    <div className="main-content">
       <CategoryItem token={token}/>
    </div>
    </div>
  )
}

export default Category

