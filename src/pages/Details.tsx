import { FetchedCountry, searchByCountry } from "config";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Button } from "components/Button";
import styled from "styled-components";
import { Info, InfoProps } from "components/Info";

const Wrapper = styled.div`
		margin-top: 2rem;
	`;

export const Details = () => {
	const { name } = useParams();
	const [isLoading, setLoading] = useState(false);
	const [info, setInfo] = useState<InfoProps | null>(null);

	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		axios.get(searchByCountry(name!)).then(({ data }) => {
			let newCountry: InfoProps = {
				borders: data[0].borders,
				capital: data[0].capital[0],
				common: data[0].name.common,
				nativeName:
					data[0].name.nativeName[
						Object.keys(data[0].name.nativeName)[0]
					].official,
				currencies: Object.entries(data[0].currencies),
				flag: data[0].flags.png,
				languages: Object.entries(data[0].languages),
				population: data[0].population,
				region: data[0].region,
				subregion: data[0].subregion,
				topLevelDomain: data[0].tld,
			};

			setInfo(newCountry);
			setLoading(false);
		});
	}, [name]);

	return (
		<Wrapper>
			<Button onClick={() => navigate(-1)}>
				<IoArrowBack />
				<span>Back</span>
			</Button>
			{isLoading && (
				<h2 style={{ position: "absolute", top: "5%", right: "0" }}>
					Загрузка...
				</h2>
			)}
			{info && <Info {...info} />}
		</Wrapper>
	);
};
