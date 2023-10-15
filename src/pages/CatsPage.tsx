import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Cat } from "../types/Cat";

function CatsPage() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [cats, setCats] = useState<Cat[]>([]);

	useEffect(() => {
		const fetchCats = () => {
			setLoading(true);
			fetch("http://someurl.com/cats")
				.then((res) => {
					res.json().then((data) => {
						if (res.ok) {
							setCats(data);
						} else {
							setError(data.message);
						}
					});
				})
				.catch(() => {
					setError("Oh no, something went wrong! 🫠");
				})
				.finally(() => {
					setLoading(false);
				});
		};

		fetchCats();
	}, []);

	return (
		<>
			<Header />
			<main>
				<h1>Cats Page</h1>
				{loading && <div>Loading...</div>}
				{error && <p>{error}</p>}
				<ul data-testid="cats">
					{cats &&
						cats.map((cat) => (
							<li data-testid="cat" key={cat.id}>
								<h2>{cat.name}</h2>
								<p>Age: {cat.age}</p>
								<p>Breed: {cat.breed}</p>
							</li>
						))}
				</ul>
			</main>
		</>
	);
}

export default CatsPage;
