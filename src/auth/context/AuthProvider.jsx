import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const init = () => {
	const user = JSON.parse(localStorage.getItem('user'));

	return {
		logged: !!user,
		user,
	};
};

export const AuthProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, {}, init);

	const login = (name = '') => {
		const user = { id: 'ABC', name };
		const loginAction = { type: types.login, payload: user };

		localStorage.setItem('user', JSON.stringify(user));

		dispatch(loginAction);
	};

	const logout = () => {
		localStorage.removeItem('user');

		const logoutAction = {
			type: types.logout,
		};

		dispatch(logoutAction);
	};

	return (
		<AuthContext.Provider
			value={{
				...authState,

				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
