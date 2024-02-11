import { Header } from "components/Header";
import { Main } from "components/Main";
import { Details, HomePage, NotFound } from "pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { FetchedCountry } from "config";
import { useState } from "react";

function App() {
	const [countries, setCountries] = useState<FetchedCountry[] | null>(null);

	return (
		<Router>
			<Header />
			<Main>
				<Routes>
					<Route
						path="/"
						element={
							<HomePage
								countries={countries}
								setCountries={setCountries}
							/>
						}
					/>

					<Route path="/country/:name" element={<Details />} />
					<Route element={<NotFound />} />
				</Routes>
			</Main>
		</Router>
	);
}

export default App;
