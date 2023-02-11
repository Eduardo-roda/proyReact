import React from 'react'
import { Link } from 'react-router-dom';

const Copyright = () => {
    return (
        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <p>Copyrights &copy; 2023- <Link to="#">Grupo 1 CODIGO</Link>, Todos los derechos reservados<br />
                        </p>
                    </div>
                    <div className="col-lg-6 text-right col-md-12">
                        <div className="social-icons">
                            <ul>
                                <li><Link to="#" target="_blank"><i class="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="#" target="_blank"><i class="fab fa-twitter"></i></Link></li>
                                <li><Link to="#" target="_blank"><i class="fab fa-instagram"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Copyright;
