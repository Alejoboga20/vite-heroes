import { HeroList } from '../components';

const publisher = 'Marvel Comics';

export const MarvelPage = () => {
	return (
		<>
			<h1>{publisher}</h1>
			<hr />

			<HeroList publisher={publisher} />
		</>
	);
};
