import React from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./components/Restaurant";
import { BrowserRouter,Routes,Route } from "react-router";
import Home from "./components/Home";
import RestaurantMenu from "./components/RestaurantMenu";
import Search from "./components/Search";
import SecondaryHome from "./components/SecondaryHome";
import { store } from "./Store/Stores";
import Checkout from "./components/Checkout";
import { Provider } from "react-redux";
function App() {
  return (
  <>
  <Provider store={store}>
   <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route element={<SecondaryHome></SecondaryHome>}>
             <Route path="/restaurant" element={<Restaurant></Restaurant>} ></Route>
             <Route path="/city/delhi/:id" element={<RestaurantMenu/>}></Route>
              <Route path="/city/delhi/:id/search" element={<Search/>}></Route>
        </Route>
             <Route path="/CHECKOUT" element={<Checkout/>}></Route>
     </Routes>   
   </BrowserRouter>
   </Provider>
  </>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);