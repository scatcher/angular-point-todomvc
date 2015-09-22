/// <reference path='_all.ts' />

/**
 * The main TodoMVC app module.
 *
 * @type {angular.Module}
 */
module todos {
    'use strict';

    let dependencies = ['angularPoint'];

    let offline = false;

    if (window.location.href.indexOf('localhost') > -1 ||
        window.location.href.indexOf('http://0.') > -1 ||
        window.location.href.indexOf('http://10.') > -1 ||
        window.location.href.indexOf('http://127.') > -1 ||
        window.location.href.indexOf('http://192.') > -1 ||
        window.location.href.indexOf('github.io') > -1){

        offline = true;
        /** Add in mock library if working offline to prevent us from making outside requests */
        dependencies.push('ngMockE2E');
    }

    angular.module('todomvc', dependencies)
        .config(config);

    function config(apConfig: ap.IAPConfig) {
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

}
