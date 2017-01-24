interface IDomElement {
  print();
}

class DomElement implements IDomElement{
  elementName : string;
  textContent: string;
  elements: IDomElement[];

  constructor(elementName : string, textContent?: string) {
    this.elementName = elementName;
    this.elements = [];
    this.textContent = textContent;
  }

  add(element: IDomElement) {
    this.elements.push(element);
  }

  print() {
    console.log(`<${this.elementName}>`);
    if (this.textContent) {
      console.log(this.textContent);
    }
    for (let element of this.elements) {
      element.print();
    }
    console.log(`</${this.elementName}>`);
  }
}




class TextNode implements IDomElement {
  private text : string;
  constructor(text : string) {
    this.text = text;
  }
  print() {
    console.log(this.text);
  }

}
