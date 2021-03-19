var app = angular.module("app", [])

app.controller("mainController", function ($scope) {
    $scope.heroes = [
        { picture: "https://i.pinimg.com/originals/19/b8/d6/19b8d6e9b13eef23ec9c746968bb88b1.jpg", name: "Merdan", description: "Super i smiren momak" },
        { picture: "https://i.pinimg.com/originals/19/b8/d6/19b8d6e9b13eef23ec9c746968bb88b1.jpg", name: "Alen", description: "100 kila gorila" },
        { picture: "https://i.pinimg.com/originals/19/b8/d6/19b8d6e9b13eef23ec9c746968bb88b1.jpg", name: "Ivana", description: "Los programer" },
        { picture: "https://i.pinimg.com/originals/19/b8/d6/19b8d6e9b13eef23ec9c746968bb88b1.jpg", name: "Jurica", description: "Isto ko ivana" },
        { picture: "https://i.pinimg.com/originals/19/b8/d6/19b8d6e9b13eef23ec9c746968bb88b1.jpg", name: "Anid", description: "Blago njemu moze on" },
        { picture: "https://i.pinimg.com/originals/19/b8/d6/19b8d6e9b13eef23ec9c746968bb88b1.jpg", name: "Qky", description: "Admin" }
    ]

    $scope.deleteHero = function (lik) {
        var index = $scope.heroes.indexOf(lik);
        $scope.heroes.splice(index, 1);
    }

    $scope.ShowHide = function (lik) {
        $scope.IsVisible = true;
        $scope.pressedLik = lik
    }

    $scope.addLik = function () {
        $scope.heroes.push({
            picture: $scope.newLik.picture,
            name: $scope.newLik.name,
            description: $scope.newLik.description
        })
        $scope.newLik.name = ""
        $scope.newLik.description = ""
        $scope.newLik.picture = ""
    }
})