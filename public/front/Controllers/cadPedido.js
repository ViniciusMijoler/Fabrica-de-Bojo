function Pedido(){
    this.num_pedido = 0;
    this.dt_pedido = new Date(); 
    this.produto = 'Bojo';
    this.cor = "Vermelho";
    this.quantidade = 1;
}

// controle das funções
app.controller('cadPedido', function ($scope, $http, $location, notify, colors, utils) {
    $scope.cores = colors.cores();

    $scope.init = function (){
        $scope.dt_pedido_min = utils.formatarData(new Date());
        $scope.pedido = new Pedido();
    };

    $scope.cadPedido = function (){
        $http.post('/api/inserirPedidos', $scope.pedido).then( (response) =>{
            notify.alert('Cadastrado com sucesso', 'success', {from: "top", align: "center"});
            $location.path("/pedidos");
        }).catch((err) => {
            console.error(err);
        });
    };


    $scope.styleSelect = {
        'border-bottom': '1px solid #9e9e9e',
        'margin': '0 0 20px 0',
        'padding': '0px'
    };
    $scope.validarStyleSelect = function (){
        $scope.styleSelect = {
            'border-bottom': '1px solid #4CAF50',
            '-webkit-box-shadow': '0 1px 0 0 #4CAF50',
            'box-shadow': '0 1px 0 0 #4CAF50',
            'margin': '0 0 20px 0',
            'padding': '0px',
        }
    };
    $scope.validarStyleDate = function (){
        $scope.styleDate = {
            'border-bottom': '1px solid #4CAF50',
            '-webkit-box-shadow': '0 1px 0 0 #4CAF50',
            'box-shadow': '0 1px 0 0 #4CAF50',
        }
    };
});