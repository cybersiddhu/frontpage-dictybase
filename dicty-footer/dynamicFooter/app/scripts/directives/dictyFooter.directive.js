/**
 * dictyFooter.directive.js
 * ----------------
 * The directive of the footer
*/

'use strict';

angular
    .module('dictyFooterApp')
    .directive('dictyFooter', dictyFooterMatter);

/**
 * [dictyFooter is the <dicty-footer> directive]
 * @return {dicty-footer.html template} It contains the basic scaffold of the application
 */

    function dictyFooterMatter () {
            return{
                restrict:'E',
                templateUrl:'templates/dicty-footer.html'
            };
    }