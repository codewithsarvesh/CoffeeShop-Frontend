import React from 'react';

const Menu = () => {
  return (
    <>
    <div>
      
          <div className="box">
            <i className="fas fa-trash"></i>
            <img src="images/cart-1.png" alt="" />
            <div className="content">
              <h3>mocha magic</h3>
              <span className="price">$34.99/=</span>
              <span className="quantity"> qty: 1</span>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-trash"></i>
            <img src="images/cart-2.png" alt="" />
            <div className="content">
              <h3>mocha magic</h3>
              <span className="price">$34.99/=</span>
              <span className="quantity"> qty: 1</span>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-trash"></i>
            <img src="images/cart-3.png" alt="" />
            <div className="content">
              <h3>mocha magic</h3>
              <span className="price">$34.99/=</span>
              <span className="quantity"> qty: 1</span>
            </div>
          </div>
          <div className="total">total : $59.99/=</div>
          <a href="#" className="btn">checkout</a>
        </div>
        
      <section className="menu">
        <div className="box-container">
          {/* Place your menu items here */}
        </div>
      </section>
      <div>
    </div>
    </>
  );
}

export default Menu;
