const BASE_URL = "https://restcountries.com/v3.1/";

export const ALL_COUNTRIES =
	BASE_URL + "all?fields=name,capital,flags,population,region";

export const searchByCountry = (name: string) => {
	return BASE_URL + "name/" + name;
};

export const filterByCode = (codes: string[] | undefined | string) => {
	if (codes != undefined && Array.isArray(codes))
		return BASE_URL + "alpha?codes=" + codes.join(",");
	else return "";
};

export type Country = {
	title: string;
	description: string;
};

export type FetchedCountry = {
	capital: string[];
	flags: Record<string, string>;
	name: {
		common: string;
		[key: string]: unknown;
	};
	population: number;
	region: string;
};
