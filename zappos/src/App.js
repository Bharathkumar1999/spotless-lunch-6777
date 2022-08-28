// import logo from './logo.svg';

import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoutes from './Routes/AllRoutes';

//import HomePage from './Routes/HomePage';


function App() {
  // const[show,setShow]= useState(true);

  // const [cart,setCart]= useState([]);

  //   const handleClick= (item)=>{
  //     if(cart.indexOf(item) !== -1) return;
  //       //console.log(item);
  //       setCart([...cart,item])
  //   }

  //   const handleChange= (item, d) =>{
  //     const ind =cart.indexOf(item);
  //     const arr = cart;
  //     arr[ind].amount += d;

  //     if(arr[ind].amount === 0) arr[ind].amount=1;
  //     setCart([...arr]);
  //   }

  return (
    <div className="App">
      <Navbar/>
  
      {/* <HomePage/> */}
      <AllRoutes />
      <Footer />
    </div>
  );
}



export default App;