import styled from "styled-components";

import { IoSearch } from "react-icons/io5";
import { ChangeEvent, ChangeEventHandler, ReactEventHandler } from "react";

interface ISearch {
	search: string;
	setSearch: (s: string) => void;
}

const InputContainer = styled.label`
    margin-top: 1.5rem;
    background-color: var(--colors-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1.5rem;

    @media(min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
        
    }
    `;

const Input = styled.input.attrs({
	type: "search",
	placeholder: "Search for a country...",
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    color: var(--colors-text);
    background-color: var(--colors-ui-base);
`;

const Search = ({ search, setSearch }: ISearch) => {
	return (
		<InputContainer>
			<IoSearch />
			<Input
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setSearch(e.currentTarget.value);
				}}
				value={search}
			/>
		</InputContainer>
	);
};

export default Search;
