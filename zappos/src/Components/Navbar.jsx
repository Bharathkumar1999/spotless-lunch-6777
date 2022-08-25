import { Link, NavLink } from "react-router-dom";
//import "../styles/App.css"
import styles from "./Navbar.module.css";
import "../styles/Navbar.css"
// import "../App.css"

// import { useState } from "react";

// const links = [
//   {
//     path: "/",
//     title: "Home"
//   },
//   {
//     path: "/Women",
//     title: "Women"
//   },
//   {
//     path: "/Men",
//     title: "Men"
//   },
//   {
//     path: "/Kids",
//     title: "Kids"
//   },
//   {
//     path: "/Departments",
//     title: "Departments"
//   },
//   {
//     path: "/Brands",
//     title: "Brands"
//   },
//   {
//     path: "/Sale",
//     title: "Sale"
//   },
//   {
//     path: "/Clothing",
//     title: "Clothing"
//   },
// ];

function Navbar() {
    // const [showLinks, setShowLinks]= useState(true)
    // const activeStyle = {
    //     color: "red",
    //     textDecoration: "none",
    //     // margin-left: "1rem"
    //   };
    //   const defaultStyle = {
    //     color: "black",
    //     textDecoration: "none",
    //     margin: "1rem"
    //   };
  return (
    

    

    
    <div>
      <div className="nav1">
        <div className="symbol1">
          <img src="https://m.media-amazon.com/images/G/01/zappos/melody/black-logo.svg" alt="" />

        </div>
        <div className="symbol2">
          <img src="https://m.media-amazon.com/images/G/01/vrsnl/vrsnl-logo._CB1564076501_.svg" alt="" />

        </div>
      </div>

      <div className="nav2">
        <div className="para1">
          <div>Customer Service</div>

        </div>
        <div className="para2">
          <div>Every Zappos order comes with FAST, FREE Shipping, plus a FREE 365-Day Return Policy! </div>

        </div>
      </div>

      
        <div className="NavFirstDiv">
            <div className="NavLogo">
                <img src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg" alt="logo" />
                
            </div>
            <div className="NavInput">
                <input type="text" placeholder="Search"/>
                <button>Search</button>

            </div>
            <div className="NavCart">
                <button>My Cart</button>
                {/* <div>Add To Cart</div> */}
            </div>
        </div>

        <div className="navbar">
            <div>
                <Link className="link1" to="/">Home</Link>

            </div>
            <div>
                <Link className="link1" to="/Women">Women</Link>

            </div>
            <div>
                <Link className="link1" to="/Men">Men</Link>

            </div>
            <div>
                <Link className="link1" to="/Kids">Kids</Link>

            </div>
            <div>
                <Link className="link1" to="/Departments">Departments</Link>

            </div>
            <div>
                <Link className="link1" to="/Brands">Brands</Link>

            </div>
            <div>
                <Link className="link1" to="/Sales">Sales</Link>

            </div>
            <div>
                <Link className="link1" to="/Clothing">Clothing</Link>

            </div>


         


            </div> 
            {/* <button onClick={()=> setShowLinks(!showLinks)}>open</button> */}
            

            <div className="SignIn">
                <Link className="link1" to="/SignIn">Sign In / Register</Link>
                
            </div>

        </div>

       
     

  );
}

{
  /* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link> */
}

export default Navbar;

//  <div className={styles.link} >
           
//              {links.map((link) => (
//                 <NavLink key={link.path}
//                 className={({ isActive }) =>
//                     isActive ? styles.active : styles.default
//                 }
            
//                 // key={link.path}
//                 to={link.path}
//                 >
//                 {link.title}
//                 </NavLink>
//             ))}

// </div>            