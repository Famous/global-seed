/*** ButtonView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = famous.core.View;
    var Surface = famous.core.Surface;
    var Transform = famous.core.Transform;
    var StateModifier = famous.modifiers.StateModifier;
    
    // Constructor function for our ButtonView class
    function ButtonView() {

        // Applies View's constructor function to ButtonView class
        View.apply(this, arguments);
    }

    // Establishes prototype chain for ButtonView class to inherit from View
    ButtonView.prototype = Object.create(View.prototype);
    ButtonView.prototype.constructor = ButtonView;

    // Default options for ButtonView class
    ButtonView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here

    module.exports = ButtonView;
});
