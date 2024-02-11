import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "App";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <App />,
// 		errorElement: <NotFound />,
// 		children: [
// 			{
// 				path: "country/:name",
// 				element: <Details />,
// 			},
// 			{
// 				path: "/",
// 				element: <HomePage />,
// 			},
// 		],
// 	},
// ]);

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(<App />);
