import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUseNavigate,
}));

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

	test('should show error when no hero is found', () => {
		render(
			<MemoryRouter initialEntries={['/search?q=noherowiththisname']}>
				<SearchPage />
			</MemoryRouter>
		);

		expect(screen.getByText("There's no result with")).toBeTruthy();
	});

	test('should call navigate to new screen', () => {
		render(
			<MemoryRouter initialEntries={['/search']}>
				<SearchPage />
			</MemoryRouter>
		);

		const input = screen.getByRole('textbox');
		fireEvent.input(input, { target: { value: 'batman' } });

		const submitButton = screen.getByRole('button', { name: 'Search' });
		fireEvent.click(submitButton);

		expect(mockedUseNavigate).toHaveBeenCalledWith('?q=batman');
	});
});
