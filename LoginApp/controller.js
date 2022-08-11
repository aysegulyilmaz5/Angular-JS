var app = angular.module('mainApp', ['ngRoute'])
/*resolve parametresi bir şeyin check ile birlikte doğruluğunu kontrol eder.*/
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html'
            
        })
        .when('/dashboard', {
            resolve: {
                "check": function ($rootScope,$location) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/')
                    }
                }
            },
            templateUrl: 'dashboard.html',
            controller:'dashboardCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
});

/*Controller içerisinde tanımladığım bir değişkeni config içerisinde kullanabilmem
için ya servisleri kullanmam lazım veri alışverişlerini sağlıyor, ya da routescope
tanımlamam lazım.route scope içerisinde applicationa bağlı değişkenleri tutar.
yani applicationun olduğu her yerde kullanabilirsin ama $scope sadece tanımlandığı
fonksiyon içerisinde kullanılır.*/

app.controller('loginCtrl', function ($scope,$location,$rootScope) {

    $scope.submit = function () {
        var kullaniciad = $scope.kullaniciad;
        var parola = $scope.parola;

        if (kullaniciad == 'admin' && parola == 'admin123') {
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
        }
        else {
            alert('Kullanıcı adı veya parola yanlış');
            $scope.kullaniciad = "";
            $scope.parola = "";
        }
    }
});

app.controller('dashboardCtrl', function ($rootScope, $scope, $location) {
    $scope.exit = function () {
        $rootscope.loggedIn = false;
        $location.path('/');
    }
})