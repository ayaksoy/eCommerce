import React from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
	return (
		<div>
			<TopHeader />
			<Header />
			<div className="breadcrumb-wrap">
				<div className="container">
					<ul className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="#">Home</a>
						</li>
						<li className="breadcrumb-item active">Contact</li>
					</ul>
				</div>
			</div>
			<div className="contact">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="contact-info">
								<div className="section-header">
									<h3>Get in Touch</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
										condimentum quam ac mi viverra dictum. In efficitur ipsum
										diam, at dignissim lorem tempor in. Vivamus tempor hendrerit
										finibus.
									</p>
								</div>
								<h4>
									<i className="fa fa-map-marker"></i>123 E Shop, Los Angeles,
									CA, USA
								</h4>
								<h4>
									<i className="fa fa-envelope"></i>email@example.com
								</h4>
								<h4>
									<i className="fa fa-phone"></i>+123-456-7890
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
