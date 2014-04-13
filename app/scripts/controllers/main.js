'use strict';

angular.module('hausOrangeHtmlApp')
.controller('MainCtrl', function ($scope) {
    $scope.homeImages = [
        {'image': 'home/1.jpg','text': 'Das Ferienhaus Orange ist ein freistehendes 2-Zimmer-Haus mit Bad und Küche in Tübingen Derendingen mit 65m² Wohnfläche.'},
        {'image': 'home/2.jpg','text': 'Es ist hochwertig und komfortabel ausgestattet'},
        {'image': 'home/3.jpg','text': '... und bietet Platz für vier Personen in gemütlicher Atmosphäre.'}
    ];
    $scope.environmentImages = [
        {'image': 'environment/1.jpg','text': 'Eingangsbereich mit Garderobe.Treppenaufgang in den ersten Stock'},
        {'image': 'environment/2.jpg', 'text': 'Das Wohnzimmer, ausgestattet mit Ausziehcoach, Tisch und StühlenFernseher mit Satellitenempfang (Astra) Telefon flat (kostenlos innerhalb Deutschland)WLAN flat'},


        {'image': 'environment/3.jpg', 'text': 'Die Küche mit Esstisch, vollständig ausgestattet mit Umluftherd, Dunstabzug, Kühlschrank mit ***Gefrierfach, Geschirrspülmaschine.Kaffeemaschine und Radio'},


        {'image': 'environment/4.jpg', 'text': 'Das Schlafzimmer mit Doppelbett (160 X 200 cm) und KleiderschrankAufgang zur Leseecke'},


        {'image': 'environment/5.jpg', 'text': 'Gemütliche Leseecke unterm Dach'},


        {'image': 'environment/6.jpg', 'text': 'Das Bad hat FussbodenheizungDusche und Urinal'},


        {'image': 'environment/7.jpg', 'text': 'Dusche ohne Stufe begehbar'}
    ];
});
