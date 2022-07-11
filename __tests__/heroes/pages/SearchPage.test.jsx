import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

describe('SearchPage Tests', () => {
	test('should match Snapshot', () => {
		const { container } = render(
			<MemoryRouter>
				<SearchPage />
			</MemoryRouter>
		);

		expect(container).toMatchSnapshot();
	});

	test('should show result on search', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=batman']}>
				<SearchPage />
			</MemoryRouter>
		);

		const inputValue = screen.getByRole('textbox');
		expect(inputValue.value).toBe('batman');

		const img = screen.getByRole('img');
		expect(img.src).toContain('/assets/heroes/dc-batman');

		const alert = screen.getByLabelText('alert-danger');
		expect(alert.style.display).toContain('none');
	});
});
