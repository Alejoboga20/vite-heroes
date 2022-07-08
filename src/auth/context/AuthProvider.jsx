import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

const initialState = {
	logged: false,
	name: '',
};

export const AuthProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, initialState);

	const login = (name = '') => {
		const loginAction = {
			type: types.login,
			payload: name,
		};

		dispatch(loginAction);
	};

	return <AuthContext.Provider value={{ ...authState, login }}>{children}</AuthContext.Provider>;
};
