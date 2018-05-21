app.service("colors", function (){
	return {
		cores: () =>{
			return [
				{'name': "Amarelo", 'rgb': "#FFFF00"},
				{'name': "Azul", 'rgb': "#0000FF"},
				{'name': "Preto", 'rgb': "#000000"},
				{'name': "Vermelho", 'rgb': "#FF0000"},
				{'name': "Verde Escuro", 'rgb': "#2F4F2F"},
				{'name': "Violeta", 'rgb': "#4F2F4F"}
			];
		} 
	}
});