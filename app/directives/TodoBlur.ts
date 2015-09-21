/// <reference path='../_all.ts' />

module todos {
    'use strict';

    /**
     * Directive that executes an expression when the element it is applied to loses focus.
     */
    export function TodoBlur(): ng.IDirective {
        return {
            link: ($scope: ng.IScope, element: JQuery, attributes: any) => {
                element.bind('blur', () => { $scope.$apply(attributes.todoBlur); });
                $scope.$on('$destroy', () => { element.unbind('blur'); });
            }
        };
    }

    angular
        .module('todomvc')
        .directive('todoBlur', TodoBlur);

}
