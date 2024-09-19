import { add, divided, evenfyer, multiply, powerBy, subtract } from './main';
describe('main', () => {
	describe('add', () => {
		it('should add values', () => {
			expect(add(1, 2)).toEqual(3);
		});
	});

	describe('subtract', () => {
		it('should subtract values', () => {
			expect(subtract(2, 1)).toEqual(1);
		});
	});
	describe('multiply', () => {
		it('should multiply values', () => {
			expect(multiply(2, 1)).toEqual(2);
		});
	});
	describe('divided', () => {
		it('should divided values', () => {
			expect(divided(4, 2)).toEqual(2);
		});
	});
	describe('evenfyer', () => {
		it('should return the next even number', () => {
			expect(evenfyer(4)).toEqual(4);
			expect(evenfyer(3)).toEqual(4);
		});
	});
	describe('powerBy', () => {
		it('should return the power of a number', () => {
			expect(powerBy(2, 2)).toEqual(4);
		});
	});
});
