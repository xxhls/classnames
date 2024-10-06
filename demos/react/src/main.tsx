import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./test.css";

const root = document.getElementById("root");
if (root) {
	const rootElement = createRoot(root);
	rootElement.render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
}
