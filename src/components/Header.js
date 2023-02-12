import logo from '../../src/assets/img/logo.png';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="top-header-area" id="sticker">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-sm-12 text-center">
                        <div className="main-menu-wrap">
                            
                            <div className="site-logo">
                                <Link to="/">
                                    <img src={logo} alt="logo-hamburguesa" className="logo-hamburguesa"/>
                                </Link>
                            </div>
                            
                            <nav className="main-menu">
                                <ul>
                                    <li className="current-list-item"><Link to="/">Home</Link></li>
                                    <li><Link to="./Footer">Nosotros</Link></li>
                                    <li><Link to="./Shop">Delivery</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="./Shop">Hamburguesas</Link></li>
                                            <li><Link to="./Carrito">Carrito</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div classNamess="header-icons">
                                            <Link className="shopping-cart" to="./Carrito"><i class="fas fa-shopping-cart"></i></Link>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <div className="mobile-menu"></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )
};


export default Header;
