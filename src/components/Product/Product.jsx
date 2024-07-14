import React from 'react';
import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';
import product4 from '../../assets/images/product4.png';
import product5 from '../../assets/images/product5.png';
import product6 from '../../assets/images/product6.png';
import certificate from "../../assets/images/Certifications.png";
import './product.css';
import khesh from "../../assets/images/kesh.png";
import eco from "../../assets/images/eco.png";

export default function Product() {
  

  return (
    <>
      <div className="product-container">
        <h1>The earth seems pretty pleased!</h1>
        <button className="shop-now">Shop Now</button>
        
        <div className="bags-grid">
          <img src={product1} alt="Product 1" />
          <img src={product2} alt="Product 2" />
          <img src={product3} alt="Product 3" />
          <img src={product4} alt="Product 4" />
          <img src={product5} alt="Product 5" />
          <img src={product6} alt="Product 6" />
        </div>
        <div className="material">
          <div className="text" style={{display:'flex',alignContent:'space-between'}}>
            <h4 style={{fontSize:"40px"}}>
              From earth we came to <br />
              her returneth
            </h4>
            <button style={{boxSizing:"10px"}} type="button">Our Materials</button>
          </div>
        </div>
        <div className="material-container">
          <div className="khesh">
            <img src={khesh} alt="Khesh material" className="zoom-hover" />
            <div className="info">
              <h2>Khesh</h2>
              <p>
                Khesh is a traditional form of weaving that 
                finds its roots in the Birbhum district of
                West Bengal. The beauty about Khesh is 
                that no two materials look the same and only once the fabric is
                woven can 
                it be appreciated in its full beauty.
              </p>
              <button className="B-knowmore">Know More</button>
            </div>
          </div>
          <div className="eco">
            <img
              src={eco}
              alt="Eco friendly packaging"
              className="zoom-hover"
            />
            <div className="info">
              <h2>Eco Friendly Packaging</h2>
              <p>
                We have a strict plastic-free and zero waste packaging policy.
                Our products come in a jute bag and recyclable boxes. 
                The product information card is made with seed paper which is
                reusable, 
                and we recommend that you do!
              </p>
              <button className="B-knowmore">Know More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="certificate">
        <img src={certificate} alt="Certificate" />
      </div>
    </>
  )
}