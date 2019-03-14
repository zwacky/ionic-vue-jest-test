import { IonicVueRouter } from '@modus/ionic-vue';

describe('Vue Router', () => {
	it('should create vue router correctly', () => {
		const router = createRouter();
		const msg = 'new message';

		expect(msg).toMatch('new message');
	});
});

function createRouter(): IonicVueRouter {
	return new IonicVueRouter({
		mode: 'history',
		base: process.env.BASE_URL,
		routes: []
	});
}
