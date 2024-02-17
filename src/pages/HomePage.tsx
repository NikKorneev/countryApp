import axios from "axios";
import { useState, useEffect, useTransition } from "react";
import { Link } from "react-router-dom";

import { Controls } from "components/Controls";
import { List } from "components/List";
import { Card } from "components/Card";
import { ALL_COUNTRIES } from "config";
import { FetchedCountry } from "config";

type Props = {
	countries: FetchedCountry[] | null;
	setCountries: (s: FetchedCountry[]) => void;
};

export const HomePage = ({ countries, setCountries }: Props) => {
	const [filteredCountries, setFilteredCountries] = useState(countries);
	const [isPending, startTransition] = useTransition();

	const handleSearch = (search: string, region: string) => {
		let data: FetchedCountry[];

		if (countries) {
			data = [...countries];

			if (region) {
				data = data.filter((c) => c.region.includes(region));
			}

			if (search) {
				data = data.filter((c) =>
					c.name.common.toLowerCase().includes(search)
				);
			}

			startTransition(() => {
				setFilteredCountries(data);
			});
		}
	};

	useEffect(() => {
		if (!countries?.length)
			axios.get(ALL_COUNTRIES).then(({ data }) => {
				setCountries(data as FetchedCountry[]);
			});
	}, []);

	return (
		<>
			<Controls onSearch={handleSearch} countries={countries}></Controls>
			<List>
				{!!filteredCountries?.length &&
					filteredCountries.map((country) => {
						const countryInfo = {
							img: country.flags.png,
							name: country.name.common,
							info: [
								{
									title: "Population",
									description:
										country.population.toLocaleString(),
								},
								{
									title: "Region",
									description: country.region,
								},
								{
									title: "Capital",
									description: country.capital[0],
								},
							],
						};
						return (
							<Card
								key={country.name.common}
								{...countryInfo}
							></Card>
						);
					})}

				{!filteredCountries?.length &&
					!!countries?.length &&
					!isPending && <h3>Данных не обнаружено</h3>}

				{isPending && <h4>Загрузка...</h4>}
			</List>
		</>
	);
};
