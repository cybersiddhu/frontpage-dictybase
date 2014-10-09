/**
 * dictyFooter.directive.js
 * ----------------
 * The directive of the footer
*/

'use strict';

angular
    .module('dictyFooterApp')
    .directive('dictyFooter', dictyFooter);

/**
 * [dictyFooter is the <dicty-footer> directive]
 * @return {dicty-footer.html template} It contains the basic scaffold of the application
 */
    function dictyFooter () {
            return{
                restrict:'E',
                templateUrl:'templates/dicty-footer.html'
            };
    }