import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { PrivateRoute } from '../../src/router/PrivateRoute';
import { AuthContext } from '../../src/auth';

describe('PrivateRoute Tests', () => {
	test('should show children when auth', () => {
		Storage.prototype.setItem = jest.fn();

		const contextValue = {
			logged: true,
			user: {
				test: 'TestingUser',
				id: 'ABC123',
			},
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/search?q=batman']}>
					<PrivateRoute>
						<h1>Private Route</h1>
					</PrivateRoute>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Private Route')).toBeTruthy();
		expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');
	});
});
