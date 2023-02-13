import img1 from '../../assets/img/products/product-img-1.jpg';
import img2 from '../../assets/img/products/product-img-2.jpg';
import img3 from '../../assets/img/products/product-img-3.jpg';

import React from 'react';
import { Link } from 'react-router-dom';

const Carrito = () => {
  return (
    <section>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Completa tu pedido aquí</p>
                <h1>Carrito</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="cart-table-wrap">
                <table className="cart-table">
                  <thead className="cart-table-head">
                    <tr className="table-head-row">
                      <th className="product-remove"></th>
                      <th className="product-image">Producto</th>
                      <th className="product-name">Nombre</th>
                      <th className="product-price">Precio</th>
                      <th className="product-quantity">Cantidad</th>
                      <th className="product-total">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="table-body-row">
                      <td className="product-remove"><Link to="#"><i className="far fa-window-close"></i></Link></td>
                      <td className="product-image"><img src={img1} alt="HS" /></td>
                      <td className="product-name">Hamburguesa simple</td>
                      <td className="product-price">S/15</td>
                      <td className="product-quantity"><input type="number" placeholder="0" /></td>
                      <td className="product-total">1</td>
                    </tr>
                    <tr className="table-body-row">
                      <td className="product-remove"><Link to="#"><i className="far fa-window-close"></i></Link></td>
                      <td className="product-image"><img src={img2} alt="HCQ" /></td>
                      <td class="product-name">Hamburguesa con queso</td>
                      <td className="product-price">S/20</td>
                      <td className="product-quantity"><input type="number" placeholder="0" /></td>
                      <td className="product-total">1</td>
                    </tr>
                    <tr className="table-body-row">
                      <td className="product-remove"><Link to="#"><i className="far fa-window-close"></i></Link></td>
                      <td className="product-image"><img src={img3} alt="HD" /></td>
                      <td className="product-name">hamburguesa doble</td>
                      <td className="product-price">S/35</td>
                      <td className="product-quantity"><input type="number" placeholder="0" /></td>
                      <td className="product-total">1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="total-section">
                <table className="total-table">
                  <thead className="total-table-head">
                    <tr className="table-total-row">
                      <th>Total</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="total-data">
                      <td><strong>Subtotal: </strong></td>
                      <td>S/100</td>
                    </tr>
                    <tr className="total-data">
                      <td><strong>Envío: </strong></td>
                      <td>S/10</td>
                    </tr>
                    <tr className="total-data">
                      <td><strong>Total: </strong></td>
                      <td>S/110</td>
                    </tr>
                  </tbody>
                </table>
                <div className="cart-buttons">
                  <Link to="./shop" class="boxed-btn">Agregar productos</Link>
                  <Link to="./checkout" class="boxed-btn black">Siguiente</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carrito;
