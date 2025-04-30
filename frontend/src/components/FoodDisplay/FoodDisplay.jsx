import React, { useContext, useEffect } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import AOS from 'aos'
import 'aos/dist/aos.css'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)

    useEffect(() => {
        AOS.init({ duration: 1000})
    },[])

  return (
    <>
        <div className='food-display' id='food-display'>
            <h2 data-aos="fade-left">Top dishes near you</h2>
            <div className='food-display-list'>
                {food_list.map((item,index)=>{
                    if(category==="All" || category===item.category) {
                        return (
                            <div data-aos="fade-up" key={index}>
                                <FoodItem 
                                    id={item._id} 
                                    name={item.name} 
                                    description={item.description} 
                                    price={item.price} 
                                    image={item.image}
                                />
                            </div>
                        )
                    }
                    return null
                })}
            </div>
        </div>
        <hr className="food-display-separator" />
    </>
  )
}

export default FoodDisplay