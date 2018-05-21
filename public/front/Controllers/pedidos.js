// controle das funções
app.controller('pedidos', function ($scope, $http, utils, colors) { 
    var cores = colors.cores();
    
    $scope.init = function (){
        getPedidos();
    };

    var getPedidos = function (){
        $http.get('/api/getPedidos').then( (response) => {
            response.data.forEach( (element) => {
                element.str_dt_pedido = utils.formatarData(element.dt_pedido);
                element.paint_cor = cores[cores.findIndex((e) => {return element.cor == e.name})].rgb;
            });
            $scope.pedidos = response.data;
        });
    };

    $scope.excluirPedido = function (id_pedido){
        $http.delete('/api/excluirPedido/'+id_pedido).then( (response) => {
            getPedidos();
            notify.alert('Excluido com sucesso', 'success', {from: "top", align: "center"});
        }).catch( (err) => {
            console.error(err);
        });
    };
});