import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatsPage from "./pages/CatsPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/cats",
		element: <CatsPage />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
