describe('Suite de testes da funcionalidade divisão da minha calculadora', function (){

	var mycalc = require ('../../src/js/mycalc.js');

	it('Deve dividir dois numeros inteiros,4 e 2, e retornar 2' , function(){
		expect(mycalc.dividir(4,2)).toEqual(2);
	});

	it('Deve dividir dois numeros flutantes 5.25 e 2.5, e retornar 2.10', function(){
		expect(mycalc.dividir(5,25 , 2.5)).toEqual(2.10);
	});
	it('Deve dividir 5.55 e 2.55 e retornar 2.18', function(){
		expect(mycalc.dividir(5.55,2.55)).toEqual(2.18);
	})

	

});