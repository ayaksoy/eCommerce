import React from "react";

export default function FeatursSection() {
	return (
		<div className="container-fluid featurs py-5">
			<div className="container py-5">
				<div className="row g-4">
					<div className="col-md-6 col-lg-3">
						<div className="featurs-item text-center rounded bg-light p-4">
							<div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
								<i className="fas fa-car-side fa-3x text-white"></i>
							</div>
							<div className="featurs-content text-center">
								<h5>Free Shipping</h5>
								<p className="mb-0">Free on order over $300</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="featurs-item text-center rounded bg-light p-4">
							<div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
								<i className="fas fa-user-shield fa-3x text-white"></i>
							</div>
							<div className="featurs-content text-center">
								<h5>Security Payment</h5>
								<p className="mb-0">100% security payment</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="featurs-item text-center rounded bg-light p-4">
							<div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
								<i className="fas fa-exchange-alt fa-3x text-white"></i>
							</div>
							<div className="featurs-content text-center">
								<h5>30 Day Return</h5>
								<p className="mb-0">30 day money guarantee</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="featurs-item text-center rounded bg-light p-4">
							<div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
								<i className="fa fa-phone-alt fa-3x text-white"></i>
							</div>
							<div className="featurs-content text-center">
								<h5>24/7 Support</h5>
								<p className="mb-0">Support every time fast</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
