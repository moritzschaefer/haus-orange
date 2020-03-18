'use strict';

angular.module('hausOrangeHtmlApp')
.controller('MainCtrl', function ($scope, Lightbox) {
    $scope.homeImages = [
        {'width': '540', 'height': '400', 'url': 'images/home/1.jpg','image': 'images/home/1.jpg','text': 'Das Ferienhaus Orange ist ein freistehendes 2-Zimmer-Haus mit Bad und Küche in Tübingen Derendingen mit 65m² Wohnfläche.'},
        {'width': '540', 'height': '400', 'url': 'images/home/2.jpg','image': 'images/home/2.jpg','text': 'Es ist hochwertig und komfortabel ausgestattet'},
      {'width': '540', 'height': '400', 'url': 'images/home/3.jpg','image': 'images/home/3.jpg','text': '... und bietet Platz für vier Personen in gemütlicher Atmosphäre.'},
      {'width': '540', 'height': '361', 'url': 'images/albcard.png','image': 'images/albcard.png','text': 'Zusätzlich gibt es die AlbCard (www.albcard.de) geschenkt, mit der Sie kostenfrei den öffentlichen Personenverkehr und viele Attraktionen der Region genießen.'}
    ];
    $scope.openLightboxModal = function (index) {
        Lightbox.openModal($scope.homeImages, index);
    };
});
