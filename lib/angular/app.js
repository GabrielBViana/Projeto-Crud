var crud = angular.module("crud", []);

crud.controller("controller", function ($scope, $http) {

    $scope.novoCliente = {};
    $scope.clienteSelecionado = {};

    $scope.clientes = [
        {nome: "Gabriel", telefone: 999999999, email: "gabriel@gmail.com"},
        {nome: "Maria Helena", telefone: 999999999, email: "mh@gmail.com"},
        {nome: "João Souza", telefone: 999999999, email: "joaos@gmail.com"}
    ];

    $scope.salvar = function () {
        $scope.clientes.push($scope.novoCliente);
        delete $scope.novoCliente;
        $scope.cad_form.$setPristine();
    };

    $scope.selecionaCliente = function (cliente) {
        $scope.clienteSelecionado = cliente;
    };

    $scope.alterarCliente = function () {

    };

    $scope.excluirCliente = function () {
        $scope.clientes.splice($scope.clientes.indexOf($scope.clienteSelecionado), 1);
    };

});