var app = angular.module("ux",['ngRoute']);

app.controller("login", ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";

    console.log("Hola")

$scope.url = window.location.href;

console.log($scope.url)

    // $rootScope.errorhttp = function (data, status, headers, config) {
    //     switch (Number(status)) {
    //         case 401:
    //             SweetAlert.swal({
    //                 title: "Sesión expirada",
    //                 text: "Por tu seguridad tu sesión ha sido cerrada.",
    //                 type: "error",
    //                 timer: 5000,
    //                 allowEscapeKey: false,
    //                 showCancelButton: false,
    //                 showConfirmButton: false
    //             });
    //             setTimeout(function () {
    //                 window.location.replace("/SISAVA");
    //             }, 5000);
    //             break;
    //         case 403:
    //             SweetAlert.swal({
    //                 title: "Acceso denegado",
    //                 text: "Lamentablemente no cuentas con los permisos necesarios para realizar esta acción",
    //                 type: "error",
    //                 timer: 3000
    //             });
    //             break;
    //         case 500:
    //             SweetAlert.swal({
    //                 title: "Error interno",
    //                 text: "Un error interno ocurrió dentro del sistema",
    //                 type: "error",
    //                 timer: 3000
    //             });
    //             break;
    //         default:
    //             console.log("Ocurrió un problema.");
    //     }
    // };
}]);