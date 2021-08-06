describe('Suite de testes da funcionalidade multiplicação da minha calculadora', function (){

	var mycalc = require ('../../src/js/mycalc.js');

	it('Deve multiplicar dois numeros inteiros,2 e 4, e retornar 8' , function(){
		expect(mycalc.multiplicar(2,4)).toEqual(8);
	});

	it('Deve multiplicar dois  numeros flutuantes  1.5 e 3.5 e retornar 5.25', function(){
		expect(mycalc.multiplicar(1.5,3.5)).toEqual(5.25);
	});

	it('Deve multiplicar 1.25 e 3.75 e retornar 4.69', function(){
		expect(mycalc.multiplicar(1.25,3.75)).toEqual(4.69);
	});

	it('Deve multiplicar 1.25 e 2 e retornar 2.5', function(){
		expect(mycalc.multiplicar(1.25,2)).toEqual(2.5);

});
