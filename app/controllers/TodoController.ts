/// <reference path='../_all.ts' />

module todos {
    'use strict';

    /**
     * The main controller for the app. The controller:
     * - retrieves and persists the model via the todoStorage service
     * - exposes the model to the template and provides event handlers
     */
    export class TodoController {
        allChecked: boolean;
        doneCount: number;
        editedTodo: TodoItem;
        location: ng.ILocationService;
        newTodo = '';
        remainingCount: number;
        statusFilter: { completed: boolean; };
        todoCache: ap.IndexedCache<TodoItem>;
        todos: TodoItem[] = [];

        // $inject annotation.
        // It provides $injector with information about dependencies to be injected into constructor
        // it is better to have it close to the constructor, because the parameters must match in count and type.
        // See http://docs.angularjs.org/guide/di
        public static $inject = [
            'todosModel',
            '$scope',
            '$location',
            'filterFilter',
            '$q'
        ];

        // dependencies are injected via AngularJS $injector
        // controller's name is registered in Application.ts and specified from ng-controller attribute in index.html
        constructor(private todosModel: TodosModel,
                    private $scope: ng.IScope,
                    private $location: ng.ILocationService,
                    private filterFilter: ng.IFilterService,
                    private $q: ng.IQService) {
            //Using controllerAs, vm represents view model
            let vm = this;

            vm.refreshTodos();

            // watching for events/changes in scope, which are caused by view/user input
            // if you subscribe to scope or event with lifetime longer than this controller, make sure you unsubscribe.
            //$scope.$watch('todos', () => vm.updateStats(), true);

            $scope.$watch('vm.$location.path()', (path) => {
                switch (path) {
                    case '/active':
                        vm.statusFilter = {completed: false};
                        break;
                    case '/completed':
                        vm.statusFilter = {completed: true};
                        break;
                    default:
                        vm.statusFilter = undefined;
                }
            });

            if ($location.path() === '') {
                $location.path('/');
            }
        }


        addTodo() {
            let newTodoTitle: string = this.newTodo.trim();
            if (!newTodoTitle.length) {
                return;
            }

            let newTodo = this.todosModel.createEmptyItem<TodoItem>({
                title: newTodoTitle,
                completed: false
            });

            newTodo.saveChanges<TodoItem>()
                .then((savedTodo) => {
                //Todo saved
                this.refreshTodos();
            })
                .catch((err) => {
                throw new Error(err);
            });

            this.newTodo = '';
        }

        editTodo(todoItem: TodoItem) {
            this.editedTodo = todoItem;
        }

        doneEditing(todoItem: TodoItem) {
            this.editedTodo = null;
            todoItem.title = todoItem.title.trim();
            if (!todoItem.title) {
                this.removeTodo(todoItem);
            } else {
                todoItem.saveChanges()
                    .then((updatedTodo) => {
                    this.refreshTodos();
                })
            }
        }

        /**
         * Initially pulls all todos, each subsequent call only gets the changes that occured since
         * the previous request
         */
        refreshTodos() {
            this.todosModel.executeQuery<TodoItem>('primary')
                .then((todos) => {
                this.todoCache = todos;
                this.todos = todos.toArray();
                this.remainingCount = this.filterFilter(this.todos, {completed: false}).length;
                this.doneCount = this.todos.length - this.remainingCount;
                this.allChecked = !this.remainingCount;
            });
        }

        removeTodo(todoItem: TodoItem) {
            todoItem.deleteItem()
                .then(() => {
                //No need to refresh because successful deletion of a list item automatically
                //prunes all local caches
                this.todos = this.todoCache.toArray();
            })
                .catch((err) => {
                //Something bad happened
                throw new Error(err);
            });
        }

        clearDoneTodos() {
            //Collection all promises so we can wait until all actions are complete before refreshing
            let promises = [];

            for (let todoItem of this.todos) {
                if (todoItem.completed) {
                    promises.push(todoItem.deleteItem());
                }
            }

            this.$q.all(promises)
                .then(() => {
                //All updates complete
                this.todos = this.todoCache.toArray();
            });
        }

        markAll() {
            //Collection all promises so we can wait until all actions are complete before refreshing
            let promises = [];

            for (let todoItem of this.todos) {
                //Only save todos that aren't already set
                if (todoItem.completed !== this.allChecked) {
                    todoItem.completed = this.allChecked;
                    promises.push(todoItem.saveChanges());
                }
            }

            this.$q.all(promises)
                .then(() => {
                //All updates complete
                this.refreshTodos();
            });
            this.allChecked = !this.allChecked;
        }
    }

    angular
        .module('todomvc')
        .controller('todoController', TodoController);

}
