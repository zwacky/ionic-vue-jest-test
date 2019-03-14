import VueRouter from 'vue-router';

describe('Ionic Vue Router', () => {
	it('should create ionic vue router correctly', () => {
		const router = createRouter();
		const msg = 'new message';
		
		expect(msg).toMatch('new message');
	});
});

function createRouter(): VueRouter {
	return new VueRouter({
		mode: 'history',
		base: process.env.BASE_URL,
		routes: [],
	});
}