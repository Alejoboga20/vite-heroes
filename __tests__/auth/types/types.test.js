import { types } from '../../../src/auth';

const benchTypes = {
	login: '[Auth] Login',
	logout: '[Auth] Logout',
};

describe('Auth Types Tests', () => {
	test('should return types', () => {
		expect(types).toEqual(benchTypes);
	});
});
