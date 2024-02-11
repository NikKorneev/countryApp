// @flow
import styled from "styled-components";
import { Container } from "./Container";
import { ReactNode } from "react";
type Props = {
	children: ReactNode;
};

const Wrapper = styled.main`
padding: 2rem 0;
@media(min-width: 767px) {
    padding: 4rem 0;
}
`;

export const Main = ({ children }: Props) => {
	return (
		<div>
			<Container>{children}</Container>
		</div>
	);
};
