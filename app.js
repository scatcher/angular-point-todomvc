/// <reference path='_all.ts' />
/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
var todos;
(function (todos) {
    'use strict';
    var dependencies = ['angularPoint'];
    var offline = false;
    if (window.location.href.indexOf('localhost') > -1 ||
        window.location.href.indexOf('http://0.') > -1 ||
        window.location.href.indexOf('http://10.') > -1 ||
        window.location.href.indexOf('http://127.') > -1 ||
        window.location.href.indexOf('http://192.') > -1 ||
        window.location.href.indexOf('github.io') > -1) {
        offline = true;
        /** Add in mock library if working offline to prevent us from making outside requests */
        dependencies.push('ngMockE2E');
    }
    angular.module('todomvc', dependencies)
        .config(config);
    function config(apConfig) {
        //TODO: Update with the site URL where most of your lists reside
        apConfig.defaultUrl = '//MY_SERVER.COM/MY_SITE';
    }
    if (offline) {
        angular.module('todomvc', dependencies)
            .run(function ($httpBackend) {
            // Don't mock the html views
            $httpBackend.whenGET(/\.html$/).passThrough();
        });
    }
})(todos || (todos = {}));
//# sourceMappingURL=app.module.js.map
/// <reference path='../_all.ts' />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var todos;
(function (todos) {
    'use strict';
    var TodoItem = (function (_super) {
        __extends(TodoItem, _super);
        function TodoItem(obj) {
            _super.call(this);
            _.assign(this, obj);
        }
        return TodoItem;
    })(ap.ListItem);
    todos.TodoItem = TodoItem;
    var TodosModel = (function (_super) {
        __extends(TodosModel, _super);
        function TodosModel() {
            /********************* Model Definition ***************************************/
            /**
             * @ngdoc object
             * @name TodosModel
             * @description
             *  Model Constructor
             */
            _super.call(this, {
                factory: TodoItem,
                list: {
                    /**Maps to the offline XML file in dev folder (no spaces) */
                    title: 'Todo',
                    //TODO: You need to set the list GUID below
                    /**List GUID can be found in list properties in SharePoint designer */
                    guid: '{C2477C93-BF7D-4CCE-8700-9399C90CD851}',
                    customFields: [
                        /** Array of objects mapping each SharePoint field to a property on a list item object */
                        { staticName: 'Title', objectType: 'Text', mappedName: 'title' },
                        { staticName: 'Completed', objectType: 'Boolean', mappedName: 'completed' }
                    ]
                }
            });
            var model = this;
            /*********************************** Queries ***************************************/
            /** Fetch data (pulls local xml if offline named model.list.title + '.xml')
             *  Initially pulls all requested data.  Each subsequent call just pulls records that have been changed,
             *  updates the model, and returns a reference to the updated data array
             */
            model.registerQuery({ name: 'primary' });
        }
        return TodosModel;
    })(ap.Model);
    todos.TodosModel = TodosModel;
    angular
        .module('todomvc')
        .service('todosModel', TodosModel);
})(todos || (todos = {}));
//# sourceMappingURL=TodosModel.js.map
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
//# sourceMappingURL=app.js.map