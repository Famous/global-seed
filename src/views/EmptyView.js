/*** EmptyView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    // Constructor function for our EmptyView class
    function EmptyView() {

        // Applies View's constructor function to EmptyView class
        View.apply(this, arguments);
    }

    // Establishes prototype chain for EmptyView class to inherit from View
    EmptyView.prototype = Object.create(View.prototype);
    EmptyView.prototype.constructor = EmptyView;

    // Default options for EmptyView class
    EmptyView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here

    module.exports = EmptyView;
});
