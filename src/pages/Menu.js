import React from 'react';
import img1 from './images/Mocha-Coffee.jpg';
import img2 from './images/cappucino-fotoliastock.7f1e032b.jpg';
import img3 from './images/cold-frappe-coffee-cream-gray-background-92379178.webp';
import img4 from './images/Blackcoffee.jpg';
import img5 from './images/keto-chocolate-chip-cookies-2.jpg';
import img6 from './images/Butterbun.jpg';
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <h1 className="heading" font="Lobster">"Savor the Flavor: Explore Our Coffee Menu"</h1>
      <div className="box-container">
        <div className="box">
          <img src={img1} alt="" />
          <center>
          <h3><i>Mocha</i></h3>
          <div className="price">270.00 <span>350.00</span></div>
          </center>
          <a href="#" className="btn">add to cart</a>
        </div>
        <div className="box">
          <img src={img2} alt="" />
          <center>
          <h3><i>Cappucino</i></h3>
          <div className="price">150.00 <span>200.00</span></div>
          </center>
          <a href="#" className="btn">add to cart</a>
        </div>
        <div className="box">
          <img src={img3} alt="" />
          <center>
          <h3><i>Cold</i></h3>
          <div className="price">200.00 <span>250.00</span></div>
          </center>
          <a href="#" className="btn">add to cart</a>
        </div>
        <div className="box">
          <img src={img4} alt="" />
          <center>
          <h3>Black Coffee</h3>
          <div className="price">150.00 <span>200.00</span></div>
          </center>
          <a href="#" className="btn">add to cart</a>
        </div>
        <div className="box">
          <img src={img5} alt="" />
          <center>
          <h3>Chocolate chip cookies</h3>
          <div className="price">50.00 <span>70.00</span></div>
          </center>
          <a href="#" className="btn">add to cart</a>
        </div>
        <div className="box">
          <img src={img6} alt="" />
          <center>
          <h3>Butter Bun </h3>
          <div className="price">80.00 <span>100.00</span></div>
          </center>
          <a href="#" className="btn">add to cart</a>
        </div>
      </div>
    </section>
  );
}

export default Menu;
