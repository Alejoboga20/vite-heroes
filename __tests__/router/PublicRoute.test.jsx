import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../../src/auth';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('PublicRoute Test', () => {
	test('should show children when not auth', () => {
		const contextValue = {
			logged: false,
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<PublicRoute>
					<h1>Public Route</h1>
				</PublicRoute>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Public Route')).toBeTruthy();
	});

	test('should navigate when auth', () => {
		const contextValue = {
			logged: true,
			user: {
				name: 'TestingUser',
				id: 'ABC123',
			},
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/login']}>
					<Routes>
						<Route
							path='login'
							element={
								<PublicRoute>
									<h1>Login Page</h1>
								</PublicRoute>
							}
						/>

						<Route path='marvel' element={<h1>Marvel Page</h1>} />
					</Routes>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Marvel Page')).toBeTruthy();
	});
});
