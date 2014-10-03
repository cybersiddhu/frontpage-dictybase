/**
 dictyFooter.directive.js
 ----------------
 dictyFooterCtrl
 */

angular
    .module('dictyFooterApp')
    .directive('dictyFooter', dictyFooter);

    function dictyFooter () {
            return{
                restrict:'EA',
                templateUrl:"templates/dicty-footer.html"
            };
    }
