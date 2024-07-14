import React from "react";
import "../Header/Header.css";
import Logo from "../../assets/images/logo.png";
import Bag from "../../assets/images/bag.png";
import Profile from "../../assets/images/profile.png";
import Background from "../../assets/images/background.png";
import option from "../../assets/images/option.png";
export default function Header() {
  return (
    <div
      className="header_wrapper"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="header-container">
        <img style={{ paddingLeft: "30px" }} src={Logo} alt="Logo" />
        <div className="h-menu">
          <a href="#">about</a>
          <a href="#">sustainability</a>
          <a href="#">shop</a>
        </div>
        <div className="flexCenter rightNav ">
          <img src={Bag} alt="Bag" width="30px" />
          <img
            style={{ marginRight: "50px" }}
            src={Profile}
            alt="Profile"
            width="30px"
          />
          <img style={{ marginRight: "100px" }} src={option} width="30px"></img>
        </div>
      </div>
      <div>
        <p>
          Some people talk about <br /> saving the world <br /> Some act
        </p>
      </div>
    </div>
  );
}

// import React from 'react'
// import Logo from '../Header/logo.png'

// import '../Header/Header.css'
// import Bag from "../Header/bag.png"
// import Profile from '../Header/profile.png'
// import Background from '../Header/background.png'
// export default function Header() {

//   return (
//     <>
//     <div className="header_wrapper" style={{ backgroundImage:`url(${Background})`,backgroundSize:"auto",     }}>
//       <div className="flexCenter paddings innerWidth header-container">
//        <img src={Logo} alt="" />
//        <div className="h-menu">
//         <a href="">about</a>
//         <a href="">sustainability</a>
//         <a href="">shop</a>

//        </div>
//        <div className=''>
//         <img src={Bag} alt="" width={'20rem'}></img>
//         <img src={Profile} width={'20rem'}  />
//        </div>

//       </div>
//      <div>
//         <p>Some people talk about <br />saving the world <br /> Some act</p>
//        </div>
//        </div>
//     </>
//   )
// }
