// controle das funções
app.controller('custosMateriaPrima', function ($scope, $http, colors) {
    var cores = colors.cores();

    $scope.init = function (){
        getCustos();
    };

    var getCustos = function (){
        $http.get('/api/custoMateriaPrima').then(function (response){
            response.data.forEach( (element) => {
                element.paint_cor = cores[cores.findIndex((e) => {return element.cor == e.name})].rgb;
            });

            $scope.custos = response.data;
            
            $scope.total_mp = 0.00;
            var qtd_produto = 0;
            $scope.espuma = {
                'qtd_espuma': 0,
                'total_espuma': 0
            };

            $scope.custos.forEach(element => {
                $scope.total_mp += parseFloat(element.custo_tecido) + parseFloat(element.custo_espuma);
                $scope.espuma.qtd_espuma += parseFloat(element.espuma);
                $scope.espuma.total_espuma += parseFloat(element.custo_espuma);
                qtd_produto += parseFloat(element.total);
            });

            $scope.vb_marketing = parseFloat(Math.round($scope.total_mp*0.1*1000)/1000);
            $scope.mao_de_obra = parseFloat(Math.round($scope.total_mp*0.3*1000)/1000);

            $scope.total_custo = $scope.total_mp + $scope.vb_marketing + $scope.mao_de_obra;
            $scope.custo_produto = parseFloat(Math.round($scope.total_custo/qtd_produto*10000)/10000);

        }).catch( (err) => {
            console.error(err);
        });
    }
});