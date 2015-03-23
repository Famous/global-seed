/*** AppView ***/

define(function(require, exports, module) {
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var LoginView = require('views/LoginView');

    function AppView() {
        View.apply(this, arguments);
        
        // saving a reference to the new node
        this.mainNode = this.add(this.rootModifier);

        var loginView = new LoginView();
        this.mainNode.add(loginView);

    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    AppView.DEFAULT_OPTIONS = { };

    

    module.exports = AppView;
});