// Constructor function
function MiniQuery(selector) {
  this.elements = document.querySelectorAll(selector);
}

// Add a class
MiniQuery.prototype.addClass = function (className) {
  this.elements.forEach(el => el.classList.add(className));
  return this; // 👈 return 'this' for chaining
};

// Remove a class
MiniQuery.prototype.removeClass = function (className) {
  this.elements.forEach(el => el.classList.remove(className));
  return this; // 👈 return 'this' for chaining
};

// Set CSS style
MiniQuery.prototype.css = function (prop, value) {
  this.elements.forEach(el => el.style[prop] = value);
  return this; // 👈 return 'this' for chaining
};

// Utility function like $
function $(selector) {
  return new MiniQuery(selector);
}

$("ul")
  .addClass("xyz")
  .removeClass("abc")
  .css("color", "red");

