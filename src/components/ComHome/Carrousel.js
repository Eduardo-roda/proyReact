import React from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';

import banner1 from '../../assets/img/banner1.jpg';
import banner2 from '../../assets/img/banner2.jpg';
import banner3 from '../../assets/img/banner3.jpg';

function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
          height="600px"
        />
        <Carousel.Caption>
            <div className="row">
					<div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
						<div className="hero-text">
							<div className="hero-text-tablecell">
								<p className="subtitle">Hamburguesas monstruosas</p>
								<h1>Deliciosas con queso!</h1>
								<div className="hero-btns">
									<Link to="./Shop" class="boxed-btn">comprar</Link>
									<Link to="./Shop" class="bordered-btn">Delivery</Link>
								</div>
							</div>
				        </div>
			        </div>
		    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
          height="600px"
        />
        <Carousel.Caption>
        <div className="row">
					<div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
						<div className="hero-text">
							<div className="hero-text-tablecell">
                                <p class="subtitle">Carne de la mejor calidad</p>
								<h1>100% Pura Carne</h1>
								<div className="hero-btns">
									<Link to="./Shop" class="boxed-btn">comprar</Link>
									<Link to="./Shop" class="bordered-btn">Delivery</Link>
								</div>
							</div>
				        </div>
			        </div>
		    </div>	
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
          height="600px"
        />
        <Carousel.Caption>
        <div className="row">
					<div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
						<div className="hero-text">
							<div className="hero-text-tablecell">
                  <p class="subtitle">Mega descuento por verano!</p>
								<h1>Deliciosas con queso!</h1>
								<div className="hero-btns">
									<Link to="./Shop" class="boxed-btn">comprar</Link>
									<Link to="./Shop" class="bordered-btn">Delivery</Link>
								</div>
							</div>
				        </div>
			        </div>
		    </div>	
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;