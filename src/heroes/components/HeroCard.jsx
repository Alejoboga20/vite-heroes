import { Link } from 'react-router-dom';

const CharactersByHero = ({ alter_ego, characters }) => {
	if (alter_ego === characters) return null;

	return <p>{characters}</p>;
};

export const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }) => {
	const heroImage = `/assets/heroes/${id}.jpg`;

	return (
		<div className='col animate__animated animate__fadeIn'>
			<div className='card'>
				<div className='row no-gutter'>
					<div className='col-4'>
						<img src={heroImage} alt='superhero' className='card-img' />
					</div>
					<div className='col-8'>
						<div className='card-body'>
							<h5 className='card-title'>{superhero}</h5>
							<p className='card-text'>{alter_ego}</p>

							<CharactersByHero characters={characters} alter_ego={alter_ego} />

							<p className='card-text'>
								<small className='text-muted'>{first_appearance}</small>
							</p>

							<Link to={`/hero/${id}`}>More...</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
