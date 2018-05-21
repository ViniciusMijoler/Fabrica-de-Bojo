app.service("utils", function (){
	return {
		formatarData: (data) =>{
			if (typeof data == 'string'){
				data = new Date(data);
			}
			var dia = data.getDate().toString();
			var mes = (data.getMonth() + 1).toString();
			var ano = data.getFullYear().toString();
	
			return (dia.length == 1 ? '0'+dia : dia) + '/' + (mes.length == 1 ? '0'+mes : mes) + '/' + ano;
		}
	}
});