(function () {
'use strict';

angular.module('LunchCheckerApp', [])
.controller('LunchCheckerController', LunchCheckerController);

LunchCheckerController.$inject = ['$scope'];

function LunchCheckerController($scope) {
  $scope.messageString = "";
  $scope.inputString = "";
  $scope.messageTextColor = "black";
  $scope.textboxBorderColor = "grey";

  $scope.countItemsInString = function(){
    if($scope.inputString.trim().length == 0)
    {
      $scope.messageString = "Please enter data first";
      $scope.messageTextColor = "red";
    }
    else
    {
      $scope.messageTextColor = "green";
      var itemNum = countItems($scope.inputString)

      if(itemNum > 3)
      {
        $scope.messageString = "Too much!";
      }
      else
      {
        $scope.messageString = "Enjoy!";
      }
    }

    $scope.textboxBorderColor = $scope.messageTextColor;
};
}

function countItems (itemsString) {
  var numOfItems = 0;
  var arrayOfItems = itemsString.split(',');

  for(var i = 0; i < arrayOfItems.length; i++)
  {
    if(arrayOfItems[i].trim().length > 0)
    {
      numOfItems++;
    }
  }

  return numOfItems;
};

})();
