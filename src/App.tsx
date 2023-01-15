/** @format */

import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { ListPage } from "./components/ListPage/ListPage";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ListPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
