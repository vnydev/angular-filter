var app = angular.module('myapp',[]);
app.controller('myctrl', function($scope){
    $scope.dates = [
        {startdate:"2017-01-06", enddate:"2017-03-19"},
        {startdate:"2017-04-03", enddate:"2017-05-18"},
        {startdate:"2017-06-07", enddate:"2017-08-25"}
    ]
})
app.filter('noOfdays', function(){
    return function (input, date1, date2) {
        var oneDay = 24*60*60*1000;
        var d1 = new Date(date1);
        var d2 = new Date(date2);
        if(date1 && date2){
            var diffDays = Math.round(Math.abs((d1.getTime() - d2.getTime())/(oneDay))); 
            return input = diffDays;
        }
    }
})
app.filter('formatCustomDates', function () {
    return function (input) {
        var oriignaldate = new Date(input);
        return oriignaldate;
    }
})