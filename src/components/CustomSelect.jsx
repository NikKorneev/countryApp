import Select from "react-select";
import styled from "styled-components";

// @flow
export const CustomSelect = styled(Select).attrs({
	styles: {
		control: (provided) => ({
			...provided,
			background: "var(--colors-ui-base)",
			color: "var(--colors-text)",
			borderRadius: "var(--radii)",
			padding: "0.25rem",
			border: "none",
			boxShadow: "var(--shadow)",
			height: "50px",
		}),
		option: (provided, state) => ({
			...provided,
			cursor: "pointer",
			color: "var(--colors-text)",
			backgroundColor: state.isSelected
				? "var(--colors-bg)"
				: "var(--colors-ui-base)",
			hover: "red",
		}),
	},
})`
	width: 200px;
	border-radius: var(--radii);
	fontFamily: var(--family);
	
	& > * {
		box-shadow: var(--shadow);
	}

	& input {
		padding-left: 0.25rem;
	}

	& * {
		color: var(--colors-text) !important;
	}

	& > div[class$="menu"] {
		background-color: var(--colors-ui-base);
		& div:hover {
			background-color: var(--colors-bg);
		}
	}
	`;
