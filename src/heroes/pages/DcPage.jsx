import { HeroList } from '../components';

const publisher = 'DC Comics';

export const DcPage = () => {
	return (
		<>
			<h1>{publisher}</h1>
			<hr />

			<HeroList publisher={publisher} />
		</>
	);
};
