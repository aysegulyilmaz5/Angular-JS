var app = angular.module('mainApp', []);

app.controller('appCtrl', function ($scope) {
    $scope.random = Math.random();
    //querySelector ile index sayfasındaki elementleri yakalayabiliriz
    document.querySelector('input').addEventListener('click', function () {
        console.log("buton tıklandı");
        $scope.random = Math.random();
        $scope.$digest();
        //digest ile randomlar farklı değil aynı olarak algılanıyor
    })
})