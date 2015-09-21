/// <reference path='../_all.ts' />

module todos {
    'use strict';

    export class TodoItem extends ap.ListItem<TodoItem> {
        completed: boolean;
        title: string;
        constructor(obj) {
            super();
            _.assign(this, obj);
        }
    }

    export class TodosModel extends ap.Model {
        constructor() {
            /********************* Model Definition ***************************************/

            /**
             * @ngdoc object
             * @name TodosModel
             * @description
             *  Model Constructor
             */
            super({
                factory: TodoItem,
                list: {
                    /**Maps to the offline XML file in dev folder (no spaces) */
                    title: 'Todo',
                    //TODO: You need to set the list GUID below
                    /**List GUID can be found in list properties in SharePoint designer */
                    guid: '{C2477C93-BF7D-4CCE-8700-9399C90CD851}',
                    customFields: [
                    /** Array of objects mapping each SharePoint field to a property on a list item object */
                        {staticName: 'Title', objectType: 'Text', mappedName: 'title'},
                        {staticName: 'Completed', objectType: 'Boolean', mappedName: 'completed'}
                    ]
                }
            });

            let model = this;

            /*********************************** Queries ***************************************/

            /** Fetch data (pulls local xml if offline named model.list.title + '.xml')
             *  Initially pulls all requested data.  Each subsequent call just pulls records that have been changed,
             *  updates the model, and returns a reference to the updated data array
             */
            model.registerQuery({name: 'primary'});


        }
    }

    angular
        .module('todomvc')
        .service('todosModel', TodosModel);
}
