import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id="footer_section" className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="footer-box about-widget">
              <h2 className="widget-title">Sobre nosotros</h2>
              <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-box get-in-touch">
              <h2 className="widget-title">Contactanos</h2>
              <ul>
                <li>En algun lugar de Peru</li>
                <li>support@burger.com</li>
                <li>+51 1234123</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-box pages">
              <h2 className="widget-title">Pages</h2>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="">Nosotros</Link></li>
                <li><Link to="./Shop">Delivery</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-box subscribe">
              <h2 className="widget-title">Dejanos tu correo</h2>
              <p>Suscribete para recibir nuestras promos!</p>
              <form action="index.html">
                <input type="email" placeholder="Email" />
                  <button type="submit"><i className="fas fa-paper-plane"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
