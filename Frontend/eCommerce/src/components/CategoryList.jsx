import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categorySlice"; // categorySlice dosyanızın yolu

export default function CategoryList() {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.category.categories);
	const status = useSelector((state) => state.category.status);
	const error = useSelector((state) => state.category.error);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchCategories());
		}
	}, [status, dispatch]);

	let content;

	if (status === "loading") {
		content = <p>Loading...</p>;
	} else if (status === "succeeded") {
		content = (
			<ul>
				{categories.map((category) => (
					<li key={category.id}>
						<a href="#">{category.name}</a>
					</li>
				))}
			</ul>
		);
	} else if (status === "failed") {
		content = <p>Error: {error}</p>;
	}

	return <div>{content}</div>;
}
