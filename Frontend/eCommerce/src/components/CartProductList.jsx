import React from "react";

export default function CartProductList() {
	return (
		<div className="cart-page">
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<div className="table-responsive">
							<table className="table table-bordered">
								<thead className="thead-dark">
									<tr>
										<th>Image</th>
										<th>Name</th>
										<th>Price</th>
										<th>Quantity</th>
										<th>Total</th>
										<th>Remove</th>
									</tr>
								</thead>
								<tbody className="align-middle">
									<tr>
										<td>
											<a href="#">
												<img src="img/product-1.png" alt="Image" />
											</a>
										</td>
										<td>
											<a href="#">Product Name</a>
										</td>
										<td>$22</td>
										<td>
											<div className="qty">
												<button className="btn-minus">
													<i className="fa fa-minus"></i>
												</button>
												<input type="text" value="1" />
												<button className="btn-plus">
													<i className="fa fa-plus"></i>
												</button>
											</div>
										</td>
										<td>$22</td>
										<td>
											<button>
												<i className="fa fa-trash"></i>
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
