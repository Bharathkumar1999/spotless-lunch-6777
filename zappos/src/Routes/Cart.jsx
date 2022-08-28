// import React from 'react'
// import styles from "../styles/cart.module.css"
// //import "../styles/Navbar.css"
// //import styles from "../styles/Cart.css"






// const Cart = ({data}) => {
//     console.log(data)

    
    
//   return (
//     // <div>Cart</div>
//     <>
//     <div>
//         <img src={data.imageURL} alt="" />
//         <h1>{data.name}</h1>
    
//     </div>
//     </>
//   )
// }

// export default Cart



// import React, { useState } from 'react'
// import { useEffect } from 'react';
// import styles from "../styles/Cart.css"
// import Women from './Women';

// const Cart = ({cart, setCart, handleChange}) => {
//     const [price, setPrice]= useState(0);

//     const handleRemove= (id) =>{
//         const arr= cart.filter((item) => item.id !== id);
//         setCart(arr);
//         handlePrice();
//     };

//     const handlePrice = ()=>{
//         let ans=0;
//         cart.map((item)=> (ans += item.amount * item.price));
//         setPrice(ans);
//     }

//     useEffect(()=>{
//         handlePrice();
//     })
//   return (
//     <article>
//         {cart.map((item)=>(
//             <div className='cart_box' key={item.id}>
//                 <div className='cart_img'>
//                     <img src={item.imageURL} alt="" />
//                     <p>{item.name}</p>

//                 </div>
//                 <div>
//                     <button onClick={()=> handleChange(item, 1)}>+</button>
//                     <button>{item.amount}</button>
//                     <button onClick={()=>handleChange(item, -1)}>-</button>
//                 </div>
//                 <div>
//                     <span>{item.price}</span>
//                     <button onClick={()=> handleRemove(item.id)}>Remove</button>
//                 </div>
//             </div>
//         ))

//         }
//         <div className='total'>
//             <span>Total Price of cart</span>
//             <span>Rs{price}</span>
//         </div>
//         {/* {show ? <Women handleClick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} */}
//     </article>
//   )
// }

// export default Cart