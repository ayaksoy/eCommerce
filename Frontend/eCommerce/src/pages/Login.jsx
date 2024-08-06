import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAdmins } from "../features/adminSlice";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});

	const { admins, loading, error } = useSelector((state) => state.admin);

	useEffect(() => {
		dispatch(fetchAdmins())
			.unwrap()
			.catch((err) => {
				console.error("Fetch Admins Error:", err); // Hata mesajını kontrol edin
			});
	}, [dispatch]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setCredentials((prevCredentials) => ({
			...prevCredentials,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const adminusername = "admin";
		const adminpassword = "admin";

		if (
			credentials.username === adminusername &&
			credentials.password === adminpassword
		) {
			localStorage.setItem("admin", JSON.stringify(admins[0]));
			navigate("/admin");
		}
	};

	return (
		<>
			<TopHeader />
			<Header />

			<div style={styles.container}>
				<h2>Admin girisi</h2>
				<form onSubmit={handleSubmit} style={styles.form}>
					<input
						type="text"
						name="username"
						placeholder="Kullanıcı Adı"
						value={credentials.username}
						onChange={handleInputChange}
						style={styles.input}
					/>
					<input
						type="password"
						name="password"
						placeholder="Şifre"
						value={credentials.password}
						onChange={handleInputChange}
						style={styles.input}
					/>
					<button type="submit" style={styles.button} disabled={loading}>
						{loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
					</button>
				</form>
				{error && <p style={styles.error}>{error}</p>}
			</div>
		</>
	);
};

const styles = {
	container: {
		width: "300px",
		margin: "100px auto",
		padding: "20px",
		border: "1px solid #ccc",
		borderRadius: "4px",
		textAlign: "center",
		backgroundColor: "#f9f9f9",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		gap: "10px",
	},
	input: {
		padding: "10px",
		fontSize: "16px",
		border: "1px solid #ccc",
		borderRadius: "4px",
	},
	button: {
		padding: "10px",
		fontSize: "16px",
		backgroundColor: "#007bff",
		color: "#fff",
		border: "none",
		borderRadius: "4px",
		cursor: "pointer",
	},
	error: {
		color: "red",
		marginTop: "10px",
	},
};

export default Login;
