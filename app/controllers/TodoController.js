/// <reference path='../_all.ts' />
var todos;
(function (todos_1) {
    'use strict';
    /**
     * The main controller for the app. The controller:
     * - retrieves and persists the model via the todoStorage service
     * - exposes the model to the template and provides event handlers
     */
    var TodoController = (function () {
        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        function TodoController(todosModel, $scope, $location, filterFilter, $q) {
            this.todosModel = todosModel;
            this.$scope = $scope;
            this.$location = $location;
            this.filterFilter = filterFilter;
            this.$q = $q;
            this.newTodo = '';
            this.todos = [];
            //Using controllerAs, vm represents view model
            var vm = this;
            vm.refreshTodos();
            // watching for events/changes in scope, which are caused by view/user input
            // if you subscribe to scope or event with lifetime longer than this controller, make sure you unsubscribe.
            //$scope.$watch('todos', () => vm.updateStats(), true);
            $scope.$watch('vm.$location.path()', function (path) {
                switch (path) {
                    case '/active':
                        vm.statusFilter = { completed: false };
                        break;
                    case '/completed':
                        vm.statusFilter = { completed: true };
                        break;
                    default:
                        vm.statusFilter = undefined;
                }
            });
            if ($location.path() === '') {
                $location.path('/');
            }
        }
        TodoController.prototype.addTodo = function () {
            var _this = this;
            var newTodoTitle = this.newTodo.trim();
            if (!newTodoTitle.length) {
                return;
            }
            var newTodo = this.todosModel.createEmptyItem({
                title: newTodoTitle,
                completed: false
            });
            newTodo.saveChanges()
                .then(function (savedTodo) {
                //Todo saved
                _this.refreshTodos();
            })
                .catch(function (err) {
                throw new Error(err);
            });
            this.newTodo = '';
        };
        TodoController.prototype.editTodo = function (todoItem) {
            this.editedTodo = todoItem;
        };
        TodoController.prototype.doneEditing = function (todoItem) {
            var _this = this;
            this.editedTodo = null;
            todoItem.title = todoItem.title.trim();
            if (!todoItem.title) {
                this.removeTodo(todoItem);
            }
            else {
                todoItem.saveChanges()
                    .then(function (updatedTodo) {
                    _this.refreshTodos();
                });
            }
        };
        /**
         * Initially pulls all todos, each subsequent call only gets the changes that occured since
         * the previous request
         */
        TodoController.prototype.refreshTodos = function () {
            var _this = this;
            this.todosModel.executeQuery('primary')
                .then(function (todos) {
                _this.todoCache = todos;
                _this.todos = todos.toArray();
                _this.remainingCount = _this.filterFilter(_this.todos, { completed: false }).length;
                _this.doneCount = _this.todos.length - _this.remainingCount;
                _this.allChecked = !_this.remainingCount;
            });
        };
        TodoController.prototype.removeTodo = function (todoItem) {
            var _this = this;
            todoItem.deleteItem()
                .then(function () {
                //No need to refresh because successful deletion of a list item automatically
                //prunes all local caches
                _this.todos = _this.todoCache.toArray();
            })
                .catch(function (err) {
                //Something bad happened
                throw new Error(err);
            });
        };
        TodoController.prototype.clearDoneTodos = function () {
            var _this = this;
            //Collection all promises so we can wait until all actions are complete before refreshing
            var promises = [];
            for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
                var todoItem = _a[_i];
                if (todoItem.completed) {
                    promises.push(todoItem.deleteItem());
                }
            }
            this.$q.all(promises)
                .then(function () {
                //All updates complete
                _this.todos = _this.todoCache.toArray();
            });
        };
        TodoController.prototype.markAll = function () {
            var _this = this;
            //Collection all promises so we can wait until all actions are complete before refreshing
            var promises = [];
            for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
                var todoItem = _a[_i];
                //Only save todos that aren't already set
                if (todoItem.completed !== this.allChecked) {
                    todoItem.completed = this.allChecked;
                    promises.push(todoItem.saveChanges());
                }
            }
            this.$q.all(promises)
                .then(function () {
                //All updates complete
                _this.refreshTodos();
            });
            this.allChecked = !this.allChecked;
        };
        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        TodoController.$inject = [
            'todosModel',
            '$scope',
            '$location',
            'filterFilter',
            '$q'
        ];
        return TodoController;
    })();
    todos_1.TodoController = TodoController;
    angular
        .module('todomvc')
        .controller('todoController', TodoController);
})(todos || (todos = {}));
//# sourceMappingURL=TodoController.js.map