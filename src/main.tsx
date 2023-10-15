import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { worker } from "./mocks/browser.ts";

if (process.env.NODE_ENV === "mock-dev") {
	console.log("Mock mode is ON! 🦄");
	worker.start();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
