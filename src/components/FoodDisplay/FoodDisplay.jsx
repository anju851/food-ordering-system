import { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItems/FoodItem';

const FoodDisplay = ({category}) =>{

    const { food_list } = useContext(StoreContext);

    return(
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {food_list.map((item) => {
                    if(category==="all" || category===item.category){
                    return(
                        <FoodItem key={item._id} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} />
                    )
                }
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;