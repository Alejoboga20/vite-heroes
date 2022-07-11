import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../src/auth/context/AuthContext';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useNavigate: () => mockedUseNavigate,
}));

describe('Navbar Tests', () => {
	const contextValue = {
		logged: true,
		user: {
			name: 'TestingUser',
			id: 'ABC',
		},
		logout: jest.fn(),
	};

	beforeEach(() => jest.clearAllMocks());

	test('should show logged username', () => {
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getByText('TestingUser')).toBeTruthy();
	});

	test('should call logout and navigate', () => {
		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<Navbar />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		const logoutButton = screen.getByRole('button', { name: 'Logout' });
		fireEvent.click(logoutButton);

		expect(contextValue.logout).toHaveBeenCalled();
		expect(mockedUseNavigate).toHaveBeenCalledWith('login', { replace: true });
	});
});
