var Calculadora = {
	 adicionar: function(n1, n2){
	 	 n1 = parseInt(n1);
	 	 n2 = parseInt(n2);

	 	 return n1 + n2;
	 }
}

 //usado na função require do NodeJS
 if (typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
 	  module.exports=Calculadora;
 }