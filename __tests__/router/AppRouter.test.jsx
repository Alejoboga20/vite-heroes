import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router/AppRouter';

describe('AppRouter Tests', () => {
	test('should show login when no auth', () => {
		const contextValue = { logged: false };

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/marvel']}>
					<AppRouter />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getAllByText('Login').length).toBe(2);
	});

	test('should show marvel page when auth', () => {
		const contextValue = { logged: true, user: { name: 'TestingUser', id: 'ABC' } };

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/login']}>
					<AppRouter />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
	});
});
