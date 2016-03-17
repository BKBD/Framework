/**
 * Created by ennis on 17/03/16.
 */
// Custom DOM Elements
var menubar = document.registerElement('menu-bar-item', {
    prototype: Object.create(HTMLDivElement.prototype)
});
var menubaritem = document.registerElement('menu-bar', {
    prototype: Object.create(HTMLDivElement.prototype)
});
var textItem = document.registerElement('f-text', {
    prototype: Object.create(HTMLHeadingElement.prototype)
});
var menuTextItem = document.registerElement('menu-text', {
    prototype: Object.create(HTMLHeadingElement.prototype)
});
var menuButtonItem = document.registerElement('menu-button' , {
    prototype: Object.create(menuTextItem.prototype)
});