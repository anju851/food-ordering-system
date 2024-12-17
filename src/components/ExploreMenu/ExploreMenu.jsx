import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';


const ExploreMenu = ({category, setCategory}) => {

    return (
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our menu</h1>
        <p className="explore-menu-text">
          Choose from diverse menu featuring a delectable array of dishes with
          the flabor of India and Indian spice.
        </p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    // if previous value of category is same as current menu-name then category=all else category = manu-name
                    <div onClick={()=>setCategory(prev => prev === item.menu_name ? 'all' : item.menu_name)} key={index}className='explore-menu-list-item'>
                        <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                );
            })}
        </div>
        <hr />
      </div>
    );
}
export default ExploreMenu;