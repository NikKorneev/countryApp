// @flow
import Search from "./Search";
import { useState, useEffect } from "react";
import { CustomSelect } from "./CustomSelect";
import styled from "styled-components";
import { FetchedCountry } from "config";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media(min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

type option = {
	value: string;
	label: string;
};

const options: option[] = [
	{ label: "Africa", value: "Africa" },
	{
		label: "America",
		value: "America",
	},
	{
		label: "Asia",
		value: "Asia",
	},
	{
		label: "Europe",
		value: "Europe",
	},
	{
		label: "Oceania",
		value: "Oceania",
	},
];

type Props = {
	onSearch: (search: string, region: string) => void;
	countries: FetchedCountry[] | null;
};

type RegionObj = {
	label: string;
	value: string;
};

export const Controls = ({ onSearch, countries }: Props) => {
	const [search, setSearch] = useState("");
	const [region, setRegion] = useState<RegionObj | null>(null);

	useEffect(() => {
		onSearch(search, region?.value || "");
	}, [search, region, countries]);

	return (
		<Wrapper>
			<Search search={search} setSearch={setSearch}></Search>
			<CustomSelect
				options={options}
				placeholder="Filter by region"
				isClearable={true}
				isSearchable={false}
				value={region}
				onChange={setRegion}
			></CustomSelect>
		</Wrapper>
	);
};
