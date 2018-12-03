var app = angular.module("myFirstApp", [])

app.controller("myFirstController",function($scope,$http){

$scope.varNombre1;
$scope.varNombre2;
$scope.varNombre3;

$scope.paramName;
$scope.url;
$scope.year;
$scope.githubUser;
$scope.name;
$scope.bio;
$scope.blog;

document.getElementById("secondLoading").style.display = 'none'	
document.getElementById("loading").style.display = 'none'
document.getElementById("rightSide").style.display = 'none'	


$scope.getName = function() {
	document.getElementById("loading").style.display = 'block'
	
	$http.get("https://api.github.com/users/" + $scope.paramName)

		.then(function (resolve) {			
			console.log(resolve.data)
			document.getElementById("secondLoading").style.display = 'block'	
			document.getElementById("rightSide").style.display = 'flex'	
			$scope.fecha = resolve.data.created_at
			$scope.avatar = resolve.data.avatar_url
			$scope.id = resolve.data.id
			$scope.paramName = ""
			$scope.githubUser = resolve.data.login
			$scope.name = resolve.data.name
			$scope.bio = resolve.data.bio
			$scope.blog = resolve.data.blog

			document.getElementById("loading").style.display = 'none'
		},

			function (reject) {
				console.log("Houston tenemos un error con: " + reject)
				document.getElementById("loading").style.display = 'none'
			})

		}
});


