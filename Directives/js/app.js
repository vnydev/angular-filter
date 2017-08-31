var app = angular.module('myApp', ['ngRoute', 'ngSanitize']);
app.controller("myctrl", function ($scope) {
    $scope.title = "This is home page";
    $scope.profileemp = [];
    $scope.employe = [
        {
            id: 1,
            name: 'Rahul',
            info: {
                salary: 920000,
                designation: 'Soft dev',
            }
        },
        {
            id: 2,
            name: 'Jack',
            info: {
                salary: 560000,
                designation: 'Network Eng.',
            }
        },
        {
            id: 3,
            name: 'ammi',
            info: {
                salary: 450000,
                designation: 'UI/UX',
            }
        },
    ]
    $scope.empProfile = function(id){
        console.log("emp fun call", id)
        if(id){
        for(var i=0;i<$scope.employe.length;i++){
            if(id == $scope.employe[i].id){
                $scope.profileemp.push($scope.employe[i]);
            }
        }
    }
    }
})

// app.directive('inCall', function () {
//     return {
//         template: `<h4>{{title}} recive call <br>msg is:{{msg}} </h4> `,
//         controller: 'myctrl',
//         restrict: 'E',
//         scope: {
//             msg: '='
//         },
//         link: function (scope, elem, attr, myctrl) {
//             console.log("what inside scope", scope);
//             console.log("what inside elem", elem);
//             console.log("what inside attr", attr);
//             console.log("inside ctrl", myctrl);
//             scope.$watch(attr.msg, function (newvalue) {
//                 console.log("one way bind value", newvalue);
//             })
//         }

//     }
// })

app.directive('basicCustomDirective', function () {
    return {
        template: `This is Basic view of custome directive on DOM`,
        restrict: 'E'
    }
})

app.controller('shareScope', function ($scope) {
    $scope.contents = "This view coming from share scope controller";
})
app.directive('shareScope', function () {
    return {
        template: `{{contents}}`,
        restrict: 'E'
    }
})
app.directive('isoScope', function () {
    return {
        templateUrl: '../view/isoscope.html',
        scope: {
            title:'@',
            employedata:'=info',
            allinfoemp:'=fullinfo',
            callemp:'&'
        },
        controller:function($scope){
            console.log("& fun",$scope.callemp)

            $scope.getempProfile =  function(id){
                $scope.callemp()(id);
            }
        },
        link:function(scope,ele,attr){
            
        }
    }
})