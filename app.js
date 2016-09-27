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

app.controller("songsController", function ($scope, StuffService) {
    console.log('asd')
    $scope.songs = StuffService.songz();
});
app.controller("friendsController", function ($scope, StuffService) {
    $scope.friends = StuffService.friendz();
});

app.factory('StuffService', function(){
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
        songz: function(){
            return songs;
        },
        friendz: function(){
            return friends;
        }
    }
})
