import React from 'react'
//import SaleCategories from "../styles/SaleCategories.css"
import "../styles/SalesCategories.css"

const SaleCategories = () => {
  return (
    <div className='SalesList'>
        <div className='SalesTitle'>
            <p>Shop Sale Categories</p>

        </div>
        <div className='card1'>
            <div className='box1'>
                <img src="https://m.media-amazon.com/images/I/71AifbtGSqL._AC_SX255_.jpg" alt="1" />
                <p>Sale Sneakers</p>

            </div>
            <div className='box1'>
                <img src="https://m.media-amazon.com/images/I/61Y-uBHG6JL._AC_SX255_.jpg" alt="2" />
                <p>Sale Sandals</p>

            </div>
            <div className='box1'>
                <img src="https://m.media-amazon.com/images/I/71deWeSEAIL._AC_SX255_.jpg" alt="3" />
                <p>Sale Heels</p>

            </div>
            <div className='box1'>
                <img src="https://m.media-amazon.com/images/I/71XwJ1xHBDL._AC_SX255_.jpg" alt="4" />
                <p>Sale Shorts</p>

            </div>
            <div className='box1'>
                <img src="https://m.media-amazon.com/images/I/61GP+rwmqLL._AC_SX255_.jpg" alt="5" />
                <p>Sale Loafers</p>

            </div>
            <div className='box1'>
                <img src="https://m.media-amazon.com/images/I/51d8kXGgajL._AC_SX255_.jpg" alt="6" />
                <p>Sale Swim</p>

            </div>

        </div>
    </div>

    
  )
}

export default SaleCategories