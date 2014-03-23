'use strict';

angular.module('hausOrangeHtmlApp')
.controller('MainCtrl', function ($scope) {
    $scope.homeImages = [
        {'image': 'home/1.jpg','text': 'Das Ferienhaus Orange ist ein freistehendes 2-Zimmer-Haus mit Bad und Küche in Tübingen Derendingen mit 65m² Wohnfläche.'},
        {'image': 'home/2.jpg','text': 'Es ist hochwertig und komfortabel ausgestattet'},
        {'image': 'home/3.jpg','text': '... und bietet Platz für vier Personen in gemütlicher Atmosphäre.'}
    ];
    $scope.environmentImages = [
        {'image': '1.jpg','text': 'Das Ferienhaus Orange ist ein freistehendes 2-Zimmer-Haus mit Bad und Küche in Tübingen Derendingen mit 65m² Wohnfläche.'},
        {'image': '2.jpg','text': 'Es ist hochwertig und komfortabel ausgestattet'},
        {'image': '3.jpg','text': '... und bietet Platz für vier Personen in gemütlicher Atmosphäre.'}
    ];
});
