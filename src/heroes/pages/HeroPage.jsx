import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers';

export const HeroPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const hero = getHeroById(id);
	const { characters, alter_ego, publisher, first_appearance, superhero } = hero;

	const onNavigateBack = () => {
		navigate(-1);
	};

	if (!hero) return <Navigate to='/marvel' />;

	return (
		<div className='row mt-5'>
			<div className='col-4'>
				<img className='img-thumbnail' src={`/assets/heroes/${id}.jpg`} alt={superhero} />
			</div>

			<div className='col-8'>
				<h3>{superhero}</h3>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<b>Alter Ego:</b> {alter_ego}
					</li>
					<li className='list-group-item'>
						<b>Publisher:</b> {publisher}
					</li>
					<li className='list-group-item'>
						<b>First Appearance:</b> {first_appearance}
					</li>
				</ul>

				<h5 className='mt-3'>Characters</h5>
				<p>{characters}</p>

				<button className='btn btn-outline-primary' onClick={onNavigateBack}>
					Back
				</button>
			</div>
		</div>
	);
};
