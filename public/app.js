(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let app = angular.module('AudioApp', ['ui.router']);

app.config(function ($stateProvider) {
    $stateProvider.state({
        name: "home",
        url: '/home',
        component: 'homecomponent'
    })
    $stateProvider.state({
        name: "songs",
        url: '/songs',
        component: 'songscomponent'
    })
    $stateProvider.state({
        name: "friends",
        url: '/friends',
        component: 'friendscomponent'
    })
});

app.component('homecomponent', {
    templateUrl: 'components/home.html',
});
app.component('songscomponent', {
    templateUrl: 'components/songs.html',
    controller: 'songsController',
});
app.component('friendscomponent', {
    templateUrl: 'components/friends.html',
    controller: 'friendsController',
});
app.controller("LoginController", function ($scope, loginservice){
    $scope.name = loginservice.userz();
    $scope.createUN = function(input) {
        loginservice.setUser(input);
    };
})
app.controller("songsController", function ($scope, StuffService) {
    $scope.songs = StuffService.songz();
});
app.controller("friendsController", function ($scope, StuffService) {
    $scope.friends = StuffService.friendz();
});
app.factory('loginservice', function() {
    let user = {
        name: ""
    }
    return {
        userz: function () {
            return user.name;
        },

        setUser: function (input) {
            user.name = input;
        }
    }
})
app.factory('StuffService', function () {
    let songs = [{ 
        title: "asdasdasd",
        artist: "afndoufd"
    },
        {
            title: "kbiudbfib",
            artist: "sdviybibv"
        },
        {
            title: "oisdnvoubfub",
            artist: "zowfosubdgon",
        }];
    let friends = [{
        name: "frank",
        songsliked: 3,
    },
        {
            name: "jumbo joe",
            songsliked: 98
        },
        {
            name: "Landotron 2000",
            songsliked: 0
        }]
    return {
        songz: function () {
            return songs;
        },
        friendz: function () {
            return friends;
        }
    }
})

},{}]},{},[1])