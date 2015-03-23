define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    
    // import the AppView class using require
    var AppView = require('views/AppView');

    var mainContext = Engine.createContext();

  // create a new instance of app view
    var appView = new AppView();

        // add the instance to the context
    mainContext.add(appView);
});
