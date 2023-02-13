import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
/*import PreLoader from "../components/PreLoader";*/
import Copyright from "../components/Copyright";

import Carrito from "../pages/Carrito";
import Checkout from "../pages/Cuenta";
import Home from "../pages/Home";
import Shop from "../pages/Shop";

const Router =()=>{
    return (
        <BrowserRouter>
        {/*rutas publicas*/}
            <Header />
                <Routes>
                    <Route path="/"                     element={<Home />}      />
                    <Route path="carrito"               element={<Carrito />}   />
                    <Route path="shop"                  element={<Shop />}      />
                    <Route path="checkout"              element={<Checkout />}  />
                </Routes>
            <Footer />
            <Copyright />
        </BrowserRouter>
    )
}

export default Router;