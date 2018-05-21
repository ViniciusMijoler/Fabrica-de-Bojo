var app = angular.module('App', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

	$routeProvider
	.when("/",{
		templateUrl: '/sisMRP/opcoes'
	})
	.when("/pedidos",{
		templateUrl: '/sisMRP/pedidos',
		controller: 'pedidos'
	})
	.when("/cadastrarPedido",{
		templateUrl: '/sisMRP/cadPedido',
		controller: 'cadPedido'
	})
	.when("/baseMateriaPrima",{
		templateUrl: '/sisMRP/cadastroCustoMateriaPrima',
		controller: 'baseMateriaPrima'
	})
	.when("/custosMateriaPrima",{
		templateUrl: '/sisMRP/custosMateriaPrima',
		controller: 'custosMateriaPrima'
	})
	.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode(true);
});