app.service("notify", function (){
	return {
		alert: (msg, type, local) => {
			$.notify({
                // options
                message: msg 
            },{
                // settings
                type: type,
                placement: local
            });
		}
	};
});