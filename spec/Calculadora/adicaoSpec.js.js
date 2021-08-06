describe('Suite de testes para a funcao adicionar da calculadora web',function(){

	var mycalc = require('../../js/calculadora.js');

	it('Deve somar dois numeros inteiros positivos', function(){
		expect(mycalc.adicionar(4, 7)).toEqual(11);
	});

	it('Deve somar dois numeros em formato texto, 2 e 10, e o resultado deve ser 12', function (){
		expect(mycalc.adicionar('2','10')).toEqual(12); 
	})
})