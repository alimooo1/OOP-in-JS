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
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const elem = new HtmlElement();
const selectElem = new HtmlSelectElement("1", "2", "3");
