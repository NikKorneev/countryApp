import { FetchedCountry } from "config";
import { useParams } from "react-router-dom";

export const Details = () => {
	let { name } = useParams();

	return <div>{name}</div>;
};
