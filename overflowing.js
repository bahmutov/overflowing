// Gleb Bahmutov <gleb.bahmutov@gmail.com>
// MIT License
// Install: bower install overflowing
// Include on the page this file overflowing.js
//
// overflow('.foo');
//   finds all elements with class "foo" with content overflowing their limits
// overflow('.foo', true)
//   adds class "overflowing" all overflowing elements (red border)
//
// If overflowing elements are found, it throws an exception with useful info
// Returns list of found elements
function overflowing(selector, highlight) {

  function createClass(name, rules) {
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule)
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name+"{"+rules+"}",0);
  }

  function isOverflowing(el) {
    return el.scrollHeight > el.offsetHeight ||
      el.scrollWidth > el.offsetWidth;
  }

  function printOverflowing(el) {
    console.log('Element', el, 'is overflowing by',
      el.scrollWidth - el.offsetWidth, 'x',
      el.scrollHeight - el.offsetHeight, 'pixels');
  }

  var overflowingClass = 'overflowing';

  function addOverflowingClass(el) {
    el.classList.add(overflowingClass);
  }

  function removeOverflowingClass(el) {
    el.classList.remove(overflowingClass);
  }

  Array.prototype.forEach.call(document.all, removeOverflowingClass);

  var els = document.querySelectorAll(selector);
  var elements = Array.prototype.slice.call(els, 0);

  var overflowingElements = elements.filter(isOverflowing);

  if (highlight && overflowingElements.length) {
    createClass('.' + overflowingClass, 'border: 1px solid red;');
    overflowingElements.forEach(addOverflowingClass);
  }

  overflowingElements.forEach(printOverflowing);

  if (overflowingElements.length) {
    // throws error asynchronously to prevent breaking the outside code
    setTimeout(function throwError() {
      throw new Error('When window is ' + window.innerWidth + ' x ' + window.innerHeight + ' pixels ' +
        overflowingElements.length + ' elements ' + selector + ' are overflowing');
    }, 0);
  }

  return overflowingElements;
}
