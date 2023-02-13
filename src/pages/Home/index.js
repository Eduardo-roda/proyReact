import img1 from '../../assets/img/products/product-img-1.jpg';
import img2 from '../../assets/img/products/product-img-2.jpg';
import img3 from '../../assets/img/products/product-img-3.jpg';
import img4 from '../../assets/img/products/product-img-4.jpg';
import img5 from '../../assets/img/products/product-img-5.jpg';
import img6 from '../../assets/img/products/product-img-6.jpg';

import React from 'react';
import { Link } from 'react-router-dom';


import Features from '../../components/ComHome/Features';
import Carrousel from "../../components/ComHome/Carrousel";
import CartBanner from "../../components/ComHome/CartBanner";

const Home = () => {

  return (
    <div>
      <Carrousel />
      <Features />
      <div className="product-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3><span class="orange-text">Nuestra</span>Carta</h3>
                <p>Nuestra especialidad las hamburguesas gigantes!</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="#">
                    <img src={img1} alt="Hamburguesa Simple" />
                  </Link>
                </div>
                <h3>Hamburguesa simple</h3>
                <p class="product-price"><span>Grande</span> S/ 20 </p>
                <Link to="./Carrito" className="cart-btn"><i className="fas fa-shopping-cart"></i>Comprar</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="#">
                    <img src={img2} alt="Hamburguesa con Queso" />
                  </Link>
                </div>
                <h3>Hamburguesa con queso</h3>
                <p className="product-price"><span>Grande</span> S/ 25 </p>
                <Link to="./Carrito" className="cart-btn"><i className="fas fa-shopping-cart"></i>Comprar</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="#">
                    <img src={img3} alt="Hemburguesa Doble" />
                  </Link>
                </div>
                <h3>Hamburguesa Doble</h3>
                <p className="product-price"><span>Grande</span>S/ 30 </p>
                <Link to="./Carrito" className="cart-btn"><i className="fas fa-shopping-cart"></i>Comprar</Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <Link href="#">
                    <img src={img4} alt="Bebida CocaCola" />
                  </Link>
                </div>
                <h3>Coca Cola</h3>
                <p className="product-price"><span>Grande</span> S/ 20 </p>
                <Link to="./Carrito" className="cart-btn"><i className="fas fa-shopping-cart"></i>Comprar</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="#">
                    <img src={img5} alt="Milkshake de Fresa" />
                  </Link>
                </div>
                <h3>Milkshake de Fresa</h3>
                <p className="product-price"><span>Grande</span> S/ 25 </p>
                <Link to="./Carrito" className="cart-btn"><i className="fas fa-shopping-cart"></i>Comprar</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="#">
                    <img src={img6} alt="Papas Nativas McCodigo" />
                  </Link>
                </div>
                <h3>Papas Nativas McCodigo</h3>
                <p className="product-price"><span>Grande</span>S/ 30 </p>
                <Link to="./Carrito" className="cart-btn"><i className="fas fa-shopping-cart"></i>Comprar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CartBanner />
    </div>
  )
}

export default Home;
