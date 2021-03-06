/// <reference path='../_all.ts' />
var todos;
(function (todos) {
    'use strict';
    /**
     * Directive that places focus on the element it is applied to when the expression it binds to evaluates to true.
     */
    function TodoFocus($timeout) {
        return {
            link: function ($scope, element, attributes) {
                $scope.$watch(attributes.todoFocus, function (newval) {
                    if (newval) {
                        $timeout(function () { return element[0].focus(); }, 0, false);
                    }
                });
            }
        };
    }
    todos.TodoFocus = TodoFocus;
    TodoFocus.$inject = ['$timeout'];
    angular
        .module('todomvc')
        .directive('todoFocus', TodoFocus);
})(todos || (todos = {}));
//# sourceMappingURL=TodoFocus.js.map