import React from 'react'
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className="single-homepage-slider homepage-bg-1">
			<div className="container">
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
			</div>
		</div>
  )
}

export default Slider;
