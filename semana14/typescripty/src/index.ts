// console.log('Hello World');

function method(callback: (a: number) => string): void{
	console.log(callback(2))
}

function bananinha(num: number): string {
  return `Olá, tenho ${num} bananinhas`
}
method(bananinha)