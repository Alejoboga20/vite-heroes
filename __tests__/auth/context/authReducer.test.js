import { authReducer } from '../../../src/auth/context/authReducer';
import { types } from '../../../src/auth/types/types';

const initialState = {
	logged: false,
	user: {},
};

const loggedState = {
	logged: true,
	user: { id: 'ABC', name: 'TestingUser' },
};

const user = { id: 'ABC', name: 'TestingUser' };
const loginAction = { type: types.login, payload: user };

const logoutAction = {
	type: types.logout,
};

describe('authReducer Tests', () => {
	test('should return default state', () => {
		const state = authReducer(initialState, {});
		expect(state).toEqual(initialState);
	});

	test('should call login and auth user', () => {
		const state = authReducer(initialState, loginAction);
		const { logged, user: loggedUser } = state;

		expect(logged).toBeTruthy(), expect(loggedUser).toEqual(user);
	});

	test('should call logout and clear user', () => {
		const logoutState = authReducer(loggedState, logoutAction);
		expect(logoutState).toEqual(initialState);
	});
});
