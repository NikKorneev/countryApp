// @flow
import { Country } from "config";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.article`
	border-radius: var(--radii);
	overflow: hidden;
	background-color: var(--colors-ui-base);
	box-shadow: var(--shadow);
	cursor: pointer;
	overflow: hidden;
`;

const CustomLink = styled(Link)`
	text-decoration: none;
	color: var(--colors-text);
`;

const CardImage = styled.img`
	display: block;
	width: 100%;
	object-fit: cover;
	height: 150px;
	object-position: center;
	box-shadow: var(--shadow);
`;

const CardBody = styled.div`
	padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
	margin: 0;
	font-size: var(--fs-md);
	font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 1rem 0;

	
`;

const CardListItem = styled.li`
	font-size: var(--fs-sm);
	line-height: 1.5;
	font-weight: var(--fw-light);

& > b {
	font-weight: var(--fw-bold);
}`;

type ICard = {
	img: string;
	name: string;
	info: {
		title: string;
		description: string;
	}[];
	// onClick: () => void;
};
export const Card = ({ img, info, name }: ICard) => {
	return (
		<Wrapper>
			<CustomLink to={`country/${name}`}>
				<CardImage src={img} alt={name} />
				<CardBody>
					<CardTitle>{name}</CardTitle>
					<CardList>
						{info.map((el) => {
							return (
								<CardListItem key={el.title}>
									<b>{el.title}</b>: {el.description}
								</CardListItem>
							);
						})}
					</CardList>
				</CardBody>
			</CustomLink>
		</Wrapper>
	);
};
