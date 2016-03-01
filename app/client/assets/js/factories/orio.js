orioApp.factory("socketFactory", function(socketFactory){
	return socketFactory();
});

orioApp.factory("orioFactory", function($http){
	var factory = {}

	factory.getBirthdays = function(info, callback){
		console.log(info)
		$http.post("/getBirthdays", info).success(function(output){
			callback(output);
		});
	}
	return factory
})