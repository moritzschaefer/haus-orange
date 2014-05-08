'use strict';

angular.module('hausOrangeHtmlApp')
.controller('MainCtrl', function ($scope, Lightbox) {
    $scope.homeImages = [
        {'width': '540', 'height': '400', 'url': 'images/home/1.jpg','image': 'images/home/1.jpg','text': 'Das Ferienhaus Orange ist ein freistehendes 2-Zimmer-Haus mit Bad und Küche in Tübingen Derendingen mit 65m² Wohnfläche.'},
        {'width': '540', 'height': '400', 'url': 'images/home/2.jpg','image': 'images/home/2.jpg','text': 'Es ist hochwertig und komfortabel ausgestattet'},
        {'width': '540', 'height': '400', 'url': 'images/home/3.jpg','image': 'images/home/3.jpg','text': '... und bietet Platz für vier Personen in gemütlicher Atmosphäre.'}
    ];
    $scope.environmentImages = [
        {'width': '540', 'height': '400', 'url': 'images/environment/1.jpg','image': 'images/environment/1.jpg','text': 'Eingangsbereich mit Garderobe.Treppenaufgang in den ersten Stock'},
        {'width': '540', 'height': '400', 'url': 'images/environment/2.jpg','image': 'images/environment/2.jpg', 'text': 'Das Wohnzimmer, ausgestattet mit Ausziehcoach, Tisch und StühlenFernseher mit Satellitenempfang (Astra) Telefon flat (kostenlos innerhalb Deutschland)WLAN flat'},


        {'width': '540', 'height': '400', 'url': 'images/environment/3.jpg','image': 'images/environment/3.jpg', 'text': 'Die Küche mit Esstisch, vollständig ausgestattet mit Umluftherd, Dunstabzug, Kühlschrank mit ***Gefrierfach, Geschirrspülmaschine.Kaffeemaschine und Radio'},


        {'width': '540', 'height': '400', 'url': 'images/environment/4.jpg','image': 'images/environment/4.jpg', 'text': 'Das Schlafzimmer mit Doppelbett (160 X 200 cm) und KleiderschrankAufgang zur Leseecke'},


        {'width': '540', 'height': '400', 'url': 'images/environment/5.jpg','image': 'images/environment/5.jpg', 'text': 'Gemütliche Leseecke unterm Dach'},


        {'width': '540', 'height': '400', 'url': 'images/environment/6.jpg','image': 'images/environment/6.jpg', 'text': 'Das Bad hat FussbodenheizungDusche und Urinal'},


        {'width': '540', 'height': '400', 'url': 'images/environment/7.jpg','image': 'images/environment/7.jpg', 'text': 'Dusche ohne Stufe begehbar'}
    ];
    $scope.openLightboxModal = function (index) {

        Lightbox.openModal($scope.homeImages, index);
    };
});
