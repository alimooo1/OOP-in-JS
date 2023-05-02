function HtmlElement() {
  this.click = function () {
    console.log("Clicked!");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("Focused!");
};

function HtmlSelectElement(...items) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
    console.log("Item Added!");
  };

  this.removeItem = function (item) {
    const index = this.items.indexOf(item);
    if (index === -1) {
      throw new Error("This Item is Not found!");
    } else {
      this.items.splice(index, 1);
      console.log("Item Removed!");
    }
  };

  this.render = function () {
    const renderedElem = document.createElement("select");
    for (let item in this.items) {
      const innerElem = document.createElement("option");
      innerElem.innerText = item;
      renderedElem.appendChild(innerElem);
    }
    return renderedElem;
  };
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {
  this.src = src;
  this.render = function () {
    const renderedElem = document.createElement("img");
    renderedElem.src = this.src;
    return renderedElem;
  };
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elem = new HtmlElement();
const selectElem = new HtmlSelectElement("1", "2", "3");
const imageElem = new HtmlImageElement("#");

const elements = [selectElem, imageElem];
for (let elem of elements) {
  console.log(elem.render());
}
