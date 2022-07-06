import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useForm } from '../../hooks';
import { HeroCard } from '../components';

export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = '' } = queryString.parse(location.search);

	const { searchText, onInputChange } = useForm({
		searchText: '',
	});

	const onSearchSubmit = (event) => {
		event.preventDefault();

		if (searchText.trim() <= 1) return;

		navigate(`?q=${searchText}`);
	};

	return (
		<>
			<h1>SearchPage</h1>
			<hr />

			<div className='row'>
				<div className='col-5'>
					<h4>Searching</h4>
					<hr />

					<form onSubmit={onSearchSubmit}>
						<input
							type='text'
							placeholder='search hero'
							className='form-control'
							name='searchText'
							autoComplete='off'
							value={searchText}
							onChange={onInputChange}
						/>
					</form>

					<button className='btn btn-outline-primary mt-2' onClick={onSearchSubmit}>
						Search
					</button>
				</div>

				<div className='col-7'>
					<h4>Results</h4>
					<hr />

					<div className='alert alert-primary'>Search a hero</div>
					<div className='alert alert-danger'>
						There's no result with <b>{q}</b>
					</div>

					{/* <HeroCard /> */}
				</div>
			</div>
		</>
	);
};
