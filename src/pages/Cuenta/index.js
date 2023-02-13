import React from 'react'
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <section>
      <div className="breadcrumb-section breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="breadcrumb-text">
                <p>Ultimo paso para recibir tu comida</p>
                <h1>Datos de Envío</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-section mt-150 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="checkout-accordion-wrap">
                <div className="accordion" id="accordionExample">
                  <div className="card single-accordion">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Datos de entrega
                        </button>
                      </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="billing-address-form">
                          <form action="index.html">
                            <p><input type="text" placeholder="Nombre" /></p>
                            <p><input type="email" placeholder="Email" /></p>
                            <p><input type="text" placeholder="Direccion" /></p>
                            <p><input type="tel" placeholder="Celular" /></p>
                            <p><textarea name="bill" id="bill" cols="30" rows="10" placeholder="Comentario"></textarea></p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card single-accordion">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Detalle de pago
                        </button>
                      </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                      <div className="card-body">
                        <div className="card-details">
                          <p>Metodo de pago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-4">
              <div className="order-details-wrap">
                <table className="order-details">
                  <thead>
                    <tr>
                      <th>Detalles de tu orden</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tbody className="order-details-body">
                    <tr>
                      <td>Producto</td>
                      <td>Total</td>
                    </tr>
                    <tr>
                      <td>Hamburguesa doble</td>
                      <td>S/ 30</td>
                    </tr>
                    <tr>
                      <td>Hamburguesa Simple</td>
                      <td>S/ 50</td>
                    </tr>
                    <tr>
                      <td>Milkshake fresa</td>
                      <td>S/ 10</td>
                    </tr>
                  </tbody>
                  <tbody className="checkout-details">
                    <tr>
                      <td>Subtotal</td>
                      <td>S/90</td>
                    </tr>
                    <tr>
                      <td>Envío</td>
                      <td>S/ 10</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>S/ 100</td>
                    </tr>
                  </tbody>
                </table>
                <Link to="#" className="boxed-btn">Finalizar</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout;
