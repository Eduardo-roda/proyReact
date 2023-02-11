import React from 'react'

const Features = () => {
    return (
        <div className="list-section pt-80 pb-80">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="list-box d-flex align-items-center">
                            <div className="list-icon">
                                <i className="fas fa-shipping-fast"></i>
                            </div>
                            <div className="content">
                                <h3>Delivery Gratis</h3>
                                <p>Por compras mayores a S/ 50</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="list-box d-flex align-items-center">
                            <div className="list-icon">
                                <i className="fas fa-phone-volume"></i>
                            </div>
                            <div className="content">
                                <h3>24/7 Atención</h3>
                                <p>Saciamos tu hambre todo el día</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="list-box d-flex justify-content-start align-items-center">
                            <div className="list-icon">
                                <i className="fas fa-sync"></i>
                            </div>
                            <div className="content">
                                <h3>Satisfacción Garantizada</h3>
                                <p>Si no te gusta no pagas!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Features;
