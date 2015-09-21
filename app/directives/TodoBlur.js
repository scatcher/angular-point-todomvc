/// <reference path='../_all.ts' />
var todos;
(function (todos) {
    'use strict';
    /**
     * Directive that executes an expression when the element it is applied to loses focus.
     */
    function TodoBlur() {
        return {
            link: function ($scope, element, attributes) {
                element.bind('blur', function () { $scope.$apply(attributes.todoBlur); });
                $scope.$on('$destroy', function () { element.unbind('blur'); });
            }
        };
    }
    todos.TodoBlur = TodoBlur;
    angular
        .module('todomvc')
        .directive('todoBlur', TodoBlur);
})(todos || (todos = {}));
//# sourceMappingURL=TodoBlur.js.map