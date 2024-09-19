export function add(a: number, b: number) {
	return a + b;
}

export function subtract(a: number, b: number) {
	return a - b;
}

export function multiply(a: number, b: number) {
	return a * b;
}

export function divided(a: number, b: number) {
	return a / b;
}
export function evenfyer(a: number) {
	if (a % 2 === 0) {
		return a;
	}
	return a + 1;
}

export function powerBy(a: number, b: number) {
	return Math.pow(a, b);
}
