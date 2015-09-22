# [angular-point](https://github.com/scatcher/angular-point) TodoMVC Example 
#### Based on [TypeScript & AngularJS TodoMVC](http://todomvc.com/examples/typescript-angular/#/)


## Demo
Here's a [demo](http://scatcher.github.io/angular-point-todomvc) if you don't feel like building the application yourself.  We're using the offline/development functionality built into [angular-point](https://github.com/scatcher/angular-point) and mocking a SharePoint backend with cached XML.  Data doesn't persist after page refreshes but by removing a single script from this file it would instead manipulate a SharePoint list and persist between sessions.

## Setup

Clone project locally:

    git clone https://github.com/scatcher/angular-point-todomvc.git
    cd angular-point-todomvc
    
Ensure Gulp and Bower are available:

    npm install --global gulp bower
    
    
Install NPM Dependencies:

    npm install
    
Install Bower Dependencies:

    bower install

## Running

    
Compile Changes to TypeScript:

    tsc
    
or to compile and watch for changes ("Ctrl + c" to abort once done)
    
    tsc -w

Serve Offline Version Locally in Browser:

    gulp serve
    
    
## Running in SharePoint

Get Version Working in SharePoint

(1) Create a custom list in SharePoint named Todo

(2) Go to "List Settings" for the new Todo list

(3) Add a new field named "Completed" of type "Yes/No".

(4) Find List GUID: While in document settings, look for the "List" query string parameter to get the list GUID.  This is typically at 
the very end and looks like MYURL?List=%7BC2477C93-BF7D-4CCE-8700-9399C90CD851%7D.  Copy everything between %7B 
through %7d.  My GUID would then be {C2477C93-BF7D-4CCE-8700-9399C90CD851}.

(5) Place this newly found GUID into app/models/todosModel.ts on line 32 for the guid property.

(6) Set the app default URL to the SharePoint site.  If my list was located at "//MY_SERVER.COM/MY_SITE/Lists/Todo" the 
site would be "//MY_SERVER.COM/MY_SITE".  If you have lists/libraries on diferent sites you can manually override
this when defining the model.

(7) Build TypeScript:

    tsc

(7) Build the app:

    gulp build

(8) Copy the contents of the newly created "./dist" folder to somewhere on SharePoint and
navigate to the index.html file in your browser.

### Files

* `*.ts` are source code files.
* `*.d.ts` are ambient declarations for libraries.
* `*.js` are generated by the compiler, except in the `js/libs` folder.
* `*.js.map` are [source maps](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) generated by the compiler, for better debugging experience.
* `_all.ts` is a convention used to enumerate file references in the project for the benefit of the TypeScript compiler.

If the number of files grows, you could put an `_all.ts` file into each folder, move all nested references to it and reference the nested `_all.ts` from the parent `_all.ts`.
