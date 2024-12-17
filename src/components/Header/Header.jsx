import "./Header.css";

const Header =()=>{

    return (
      <div className="header">
        <div className="header-contents">
          <h2>Order your favorite food here</h2>
          <p>
            Choose from diverse menu featuring a delectable array of dishes with
            the flabor of India and Indian spice.Made with whole <s style={{color:"blue"}}>wheat</s>
             <b>Heart</b>
          </p>
          <button>View Menu</button>
        </div>
      </div>
    );
   
}

export default Header;