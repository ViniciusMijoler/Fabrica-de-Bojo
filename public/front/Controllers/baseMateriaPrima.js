// controle das funções
app.controller('baseMateriaPrima', function ($scope, $http, notify) {

    $scope.init = function (){
        getMateriaPrima();
    }

    var getMateriaPrima = function (){
        $http.get('/api/getMateriaPrima').then( (response) => {
            $scope.materiaPrima = response.data;
        });
    }

    $scope.updateMateriaPrima = function (){
        $http.put('/api/putMateriaPrima', $scope.materiaPrima).then( (response) => {
            getMateriaPrima();
            notify.alert('Custo atualizado!', 'success', {from: "top", align: "center"});
        });
    }
});