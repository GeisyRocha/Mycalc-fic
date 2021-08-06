describe('Suite de testes da funcionalidade subtração da minha calculadora', function (){

	var mycalc = require ('../../src/js/mycalc.js');

	it('Deve subtrair dois numeros inteiros,2 e 5, e retornar -3' , function(){
		expect(mycalc.subtrair(2,5)).toEqual(-3);
	});

it('Deve subtrair dois numeros inteiros,5 e 3, e retornar 2' , function(){
		expect(mycalc.subtrair(5,3)).toEqual(2);
	});
it('Deve subtrair dois numeros de ponto flutuante,5.5 , 3.4, e retornar 2.1' , function(){
		expect(mycalc.subtrair(5.5,3.4)).toEqual(2.1);
	});

it('Deve subtrair dois numeros de ponto flutuante,5.55 , 3.45, e retornar 2.10' , function(){
		expect(mycalc.subtrair(5.55,3.45)).toEqual(2.10);
	});
});