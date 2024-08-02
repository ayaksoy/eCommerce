import React from "react";

export default function Hero() {
	return (
		<div className="container-fluid py-5 mb-5 hero-header">
			<div className="container py-5">
				<div className="row g-5 align-items-center">
					<div className="col-md-12 col-lg-7">
						<h4 className="mb-3 text-secondary">100% Organic Foods</h4>
						<h1 className="mb-5 display-3 text-primary">
							Organic Veggies & Fruits Foods
						</h1>
						<div className="position-relative mx-auto">
							<input
								className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
								type="number"
								placeholder="Search"
							/>
							<button
								type="submit"
								className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
								style="top: 0; right: 25%;"
							>
								Submit Now
							</button>
						</div>
					</div>
					<div className="col-md-12 col-lg-5">
						<div
							id="carouselId"
							className="carousel slide position-relative"
							data-bs-ride="carousel"
						>
							<div className="carousel-inner" role="listbox">
								<div className="carousel-item active rounded">
									<img
										src="img/hero-img-1.png"
										className="img-fluid w-100 h-100 bg-secondary rounded"
										alt="First slide"
									/>
									<a href="#" className="btn px-4 py-2 text-white rounded">
										Fruites
									</a>
								</div>
								<div className="carousel-item rounded">
									<img
										src="img/hero-img-2.jpg"
										className="img-fluid w-100 h-100 rounded"
										alt="Second slide"
									/>
									<a href="#" className="btn px-4 py-2 text-white rounded">
										Vesitables
									</a>
								</div>
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselId"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselId"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
