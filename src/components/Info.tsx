import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import { filterByCode } from "config";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
margin-top: 3rem;
width: 100%;
display: grid;
grid-template-columns: 100%;
gap: 2rem;

@media (min-width: 767px) {
	grid-template-columns: minmax(100px, 400px) 1fr;
	align-items: center;
	gap: 5rem;
}

@media (min-width: 1024px) {
	grid-template-columns: minmax(400px, 600px) 1fr;
}
`;

const InfoTitle = styled.h1`
	margin: 0;
	font-weight: var(--fw-normal);
`;

const InfoImg = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	object-fit: contain;
`;

const ListGroup = styled.div`
	display: flex;
	flex-direction: column;

	gap: 2rem;

	@media (min-width: 1024px) {
		flex-direction: row;
		gap: 4rem;
	}
`;

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;


`;

const ListItem = styled.li`

	line-height: 1.8;

	& > b {
		font-weight: var(--fw-bold);
	}
`;

const Meta = styled.div`
	margin-top: 3rem;
	display: flex;
	gap: 1.5rem;
	flex-direction: column;

	align-items: flex-start;

	& > b {
		font-weight: var(--fw-bold);
	}

	@media (min-width: 767px) {
		flex-direction: row;
		align-items: center;
	}
`;

const TagGroup = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
`;

const Tag = styled(Link)`
	padding: 0 1rem;
	background-color: var(--colors-bg);
	color: var(--colors-text);
	line-height: 1.5;
	cursor: pointer;
	box-shadow: var(--shadow);
	text-decoration: none;
	&:active, &:vi {
		color: var(--colors-text);
	}
`;

export type InfoProps = {
	common: string;
	nativeName: string;
	flag: string;
	capital: string;
	population: number;
	region: string;
	subregion: string;
	currencies: [string, { name: string }][];
	languages: [string, string][];
	borders: string[];
	topLevelDomain: string[];
};

type Country = {
	name: {
		common: string;
	};
	fifa: string;
};

export const Info = (props: InfoProps) => {
	const [neighbours, setNeighbours] = useState<string[] | null>(null);

	useEffect(() => {
		props.borders?.length &&
			axios.get(filterByCode(props.borders)).then(({ data }) => {
				setNeighbours(
					data.map((c: { name: { common: string } }) => c.name.common)
				);
			});
	}, [props.borders]);

	const topLevelDomainStr = props.topLevelDomain.join(", ");
	const curStr = props.currencies.map((k) => k[1].name).join(", ");
	const langStr = props.languages.map((k) => k[1]).join(", ");

	return (
		<Wrapper>
			<InfoImg src={props.flag} alt={props.common} />
			<div>
				<InfoTitle>{props.common}</InfoTitle>

				<ListGroup>
					<List>
						<ListItem>
							<b>Native Name:</b> {props.common}
						</ListItem>
						<ListItem>
							<b>Population:</b> {props.population}
						</ListItem>
						<ListItem>
							<b>Region:</b> {props.region}
						</ListItem>
						<ListItem>
							<b>Capital:</b> {props.capital}
						</ListItem>
						<ListItem>
							<b>Sub Region:</b> {props.subregion}
						</ListItem>
					</List>
					<List>
						<ListItem>
							{topLevelDomainStr && <b>Top Level Domain: </b>}
							{topLevelDomainStr}
						</ListItem>
						<ListItem>
							{curStr && <b>Currencies: </b>}
							{curStr}
						</ListItem>
						<ListItem>
							{langStr && <b>Languages: </b>}
							{langStr}
						</ListItem>
					</List>
				</ListGroup>
				<Meta>
					{props.borders?.length && <b>Border Countries</b>}
					{props.borders?.length && (
						<TagGroup>
							{neighbours?.map((k, j) => {
								return (
									<Tag key={k} to={`/country/${k}`}>
										{k}
									</Tag>
								);
							})}
						</TagGroup>
					)}
				</Meta>
			</div>
		</Wrapper>
	);
};
