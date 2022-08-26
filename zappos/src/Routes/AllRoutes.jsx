import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";

// import PrivateRoute from "../Components/PrivateRoute";
import Women from "./Women";
import Men from "./Men";
import Kids from "./Kids";
import SaleCategories from "./SaleCategories";
import Sales from "./Sales";

//import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Departments" element={ <h1>Departments</h1> } />
        <Route path="/Brands" element={ <h1>Brands</h1> } />
        <Route path="/Sales" element={ <h1>Sales</h1> } />
        <Route path="/SignIn" element={ <h1>Sign In</h1> } />
        <Route path="/SalesCategories" element={ <SaleCategories/> } />
        <Route path="/Sales" element={ <Sales /> } />
       
        {/* <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <UsersPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/users/:id"
          element={
            <PrivateRoute>
              <SingleUserPage />
            </PrivateRoute>
          }
        /> */}
      </Routes>
     
    </div>
  );
}

export default AllRoutes;