import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import PreLoader from "../components/PreLoader";
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
                    <Route path="Carrito"               element={<Carrito />}   />
                    <Route path="Shop"                  element={<Shop />}      />
                    <Route path="Checkout"              element={<Checkout />}  />
                </Routes>
            <Footer />
            <Copyright />
        </BrowserRouter>
    )
}

export default Router;