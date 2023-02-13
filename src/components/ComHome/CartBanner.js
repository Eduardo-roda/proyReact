import ms from '../../assets/img/a.jpg';
import React from 'react'
import { Link } from 'react-router-dom';

const CartBanner = () => {
  return (
    <section className="cart-banner pt-100 pb-100">
      <div className="container">
        <div className="row clearfix">

          <div className="image-column col-lg-6">
            <div className="image">
              <div className="price-box">
                <div className="inner-price">
                  <span className="price">
                    <strong>30%</strong> <br />Descuento
                  </span>
                </div>
              </div>
              <img src={ms} alt="Milkshake de Fresa" />
            </div>
          </div>

          <div className="content-column col-lg-6">
            <h3><span className="orange-text">Oferta</span> del mes</h3>
            <h4>Milk Shake de Fresa</h4>
            <div className="text">Ven y disfruta de un delicioso Milkshake de fresa durante el mes de Febrero y obten un 30% de descuento!</div>

            <div class="time-counter">
              <div class="time-countdown clearfix" data-countdown="2023/2/28">
                <div class="counter-column">
                  <div class="inner">
                    <span class="count">00</span>Dias
                  </div>
                </div> 
                <div class="counter-column">
                  <div class="inner">
                    <span class="count">00</span>Horas
                  </div>
                </div>  
                <div class="counter-column">
                  <div class="inner">
                    <span class="count">00</span>Mins
                  </div>
                </div>  
                <div class="counter-column">
                  <div class="inner">
                    <span class="count">00</span>Segs
                  </div>
                </div>
              </div>
            </div>
            <Link to="./Carrito" class="cart-btn mt-3"><i class="fas fa-shopping-cart"></i>Añadir al carrito</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CartBanner;
