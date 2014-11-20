// Gleb Bahmutov <gleb.bahmutov@gmail.com>
// MIT License
// overflow('.foo');
// adds class "overflowing" to elements with class "foo" that overflow their size.
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
    throw new Error('When window is ' + window.innerWidth + ',' + window.innerHeight + ' pixels ' +
      overflowingElements.length + ' elements ' + selector + ' are overflowing');
  }
}
