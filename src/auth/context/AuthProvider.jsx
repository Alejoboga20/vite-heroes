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
		const user = { ud: 'ABC', name };

		const loginAction = {
			type: types.login,
			payload: name,
		};

		localStorage.setItem('user', JSON.stringify(user));

		dispatch(loginAction);
	};

	return <AuthContext.Provider value={{ ...authState, login }}>{children}</AuthContext.Provider>;
};
