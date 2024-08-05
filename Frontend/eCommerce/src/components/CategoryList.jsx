import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../features/categorySlice";
import { fetchProductsByCategoryId } from "../features/productSlice";

export default function CategoryList({ onCategorySelect }) {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.category.categories);
	const status = useSelector((state) => state.category.status);
	const error = useSelector((state) => state.category.error);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchCategories());
		}
	}, [status, dispatch]);

	const handleCategoryClick = (categoryId) => {
		dispatch(fetchProductsByCategoryId(categoryId)).then((response) => {
			if (response.meta.requestStatus === "fulfilled") {
				onCategorySelect(response.payload);
			}
		});
	};

	let content;

	if (status === "loading") {
		content = <p>Loading...</p>;
	} else if (status === "succeeded") {
		content = (
			<ul>
				{categories.map((category) => (
					<li key={category.id}>
						<button onClick={() => handleCategoryClick(category.id)} className="custom-category-button">
							{category.name}
						</button>
					</li>
				))}
			</ul>
		);
	} else if (status === "failed") {
		content = <p>Error: {error}</p>;
	}

	return <div>{content}</div>;
}
