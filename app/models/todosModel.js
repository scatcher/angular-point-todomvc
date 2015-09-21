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