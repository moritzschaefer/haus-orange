"use strict";angular.module("hausOrangeHtmlApp",["ngCookies","ngRoute"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/images",{templateUrl:"views/images.html",controller:"MainCtrl"}).when("/location",{templateUrl:"views/location.html",controller:"MainCtrl"}).when("/price",{templateUrl:"views/price.html",controller:"MainCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"MainCtrl"}).otherwise({redirectTo:"/home"})}]).directive("homeImage",function(){return{scope:{model:"=content"},templateUrl:"views/partials/image-text.html"}}).directive("activeLink",["$location",function(a){return{restrict:"A",link:function(b,c,d){var e=d.activeLink,f=d.path;b.location=a,b.$watch("location.path()",function(a){f===a?c.addClass(e):c.removeClass(e)})}}}]),angular.module("hausOrangeHtmlApp").controller("MainCtrl",["$scope",function(a){a.homeImages=[{image:"home/1.jpg",text:"Das Ferienhaus Orange ist ein freistehendes 2-Zimmer-Haus mit Bad und Küche in Tübingen Derendingen mit 65m² Wohnfläche."},{image:"home/2.jpg",text:"Es ist hochwertig und komfortabel ausgestattet"},{image:"home/3.jpg",text:"... und bietet Platz für vier Personen in gemütlicher Atmosphäre."}],a.environmentImages=[{image:"environment/1.jpg",text:"Eingangsbereich mit Garderobe.Treppenaufgang in den ersten Stock"},{image:"environment/2.jpg",text:"Das Wohnzimmer, ausgestattet mit Ausziehcoach, Tisch und StühlenFernseher mit Satellitenempfang (Astra) Telefon flat (kostenlos innerhalb Deutschland)WLAN flat"},{image:"environment/3.jpg",text:"Die Küche mit Esstisch, vollständig ausgestattet mit Umluftherd, Dunstabzug, Kühlschrank mit ***Gefrierfach, Geschirrspülmaschine.Kaffeemaschine und Radio"},{image:"environment/4.jpg",text:"Das Schlafzimmer mit Doppelbett (160 X 200 cm) und KleiderschrankAufgang zur Leseecke"},{image:"environment/5.jpg",text:"Gemütliche Leseecke unterm Dach"},{image:"environment/6.jpg",text:"Das Bad hat FussbodenheizungDusche und Urinal"},{image:"environment/7.jpg",text:"Dusche ohne Stufe begehbar"}]}]);