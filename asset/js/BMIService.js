var BMIService = {

	getIndex: function(weight, height) {
		if(typeof(weight) === 'number' && typeof(height) === 'number') {
			return weight / (height * height);
		}
		return null;
	},
	
	getDescription: function (index) {
		var frase = " ";
		if(index < 17){
			frase = "Muito abaixo do peso ";
			
		}
		else if((index >= 17) && (index < 18.49)){
			frase = "Abaixo do peso ";
			
		}
		
		else if((index >= 18.5) && (index <= 24.99 )){
			frase = "Peso normal ";
		}
		
		else if((index >= 25) && (index <= 29.99 )){
			frase = "Acima do peso ";
		}
		else if((index >= 30) && (index <= 34.99 )){
			frase = "Obesidade | ";
		}
		else if((index >= 35) && (index <= 39.99 )){
			frase = "Obesidade ||  (Severa)";
		}
		
		else if((index > 40 )){
			frase = "Obesidade ||| (Morbida)";
		}
				return frase ;
	}
	
};