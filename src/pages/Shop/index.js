import img1 from '../../assets/img/products/product-img-1.jpg';
import img2 from '../../assets/img/products/product-img-2.jpg';
import img3 from '../../assets/img/products/product-img-3.jpg';
import img4 from '../../assets/img/products/product-img-4.jpg';
import img5 from '../../assets/img/products/product-img-5.jpg';
import img6 from '../../assets/img/products/product-img-6.jpg';

import React from 'react'
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <section>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Las mejores Hamburguesas aquí</p>
                <h1>Carta</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-section mt-150 mb-150">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="product-filters">
                <ul>
                  <li className="active" data-filter="*">Todo</li>
                  <li data-filter=".burger">Hamburguesas</li>
                  <li data-filter=".drinks">Bebidas</li>
                  <li data-filter=".complements">complementos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row product-lists">
            <div className="col-lg-4 col-md-6 text-center burger">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="single-product.html"><img src={img1} alt="Hamburguesa simple" /></Link>
                </div>
                <h3>Hamburguesa simple</h3>
                <p className="product-price"><span>Hamburguesa de carne</span> S/ 20 </p>
                <Link to="./Carrito" class="cart-btn"><i class="fas fa-shopping-cart"></i> Agregar </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center burger">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="single-product.html"><img src={img2} alt="Hamburguesa con queso" /></Link>
                </div>
                <h3>Hamburguesa con queso</h3>
                <p className="product-price"><span>100% carne y 2 quesos</span> S/ 25 </p>
                <Link to="./Carrito" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center burger">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="single-product.html"><img src={img3} alt="Hamburguesa doble" /></Link>
                </div>
                <h3>Hamburguesa doble</h3>
                <p className="product-price"><span>300g de carne</span> S/ 30 </p>
                <Link to="./Carrito" className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center drinks">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="single-product.html"><img src={img4} alt="Cocacola" /></Link>
                </div>
                <h3>Cocacola</h3>
                <p className="product-price"><span>Botella personal</span> S/ 5 </p>
                <Link to="./Carrito" className="cart-btn"><i className="fas fa-shopping-cart"></i> Agregar </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center drinks">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="single-product.html"><img src={img5} alt="Milkshake de fresa" /></Link>
                </div>
                <h3>Milkshake de fresa</h3>
                <p className="product-price"><span>Vaso mediano </span> S/ 10 </p>
                <Link to="./Carrito" className="cart-btn"><i className="fas fa-shopping-cart"></i> Agregar </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center complements">
              <div className="single-product-item">
                <div className="product-image">
                  <Link to="single-product.html"><img src={img6} alt="Papas fritas" /></Link>
                </div>
                <h3>Papas fritas</h3>
                <p className="product-price"><span>Porcion mediana</span> S/ 10 </p>
                <Link to="./Carrito" className="cart-btn"><i className="fas fa-shopping-cart"></i> Agregar </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop;
