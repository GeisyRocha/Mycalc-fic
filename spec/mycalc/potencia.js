describe('Suite de testes da funcionalidade exponenciação da minha calculadora', function (){

	var mycalc = require ('../../src/js/mycalc.js');

	it('Deve fazer a potencia dois numeros inteiros,3 e 2, e retornar 9' , function(){
		expect(mycalc.potencia(3,2)).toEqual(9);
	
	});

	it('Deve fazer a potencia de 1.5 e 3 e retornar 3.38', function(){
		expect(mycalc.potencia(1.5,3)).toEqual(3.38);
	});

	it('Deve fazer a potencia de 1.5 e 3.56e retornar 4.13', function(){
		expect(mycalc.potencia(1.5,3.5)).toEqual(4.13);
	});

});