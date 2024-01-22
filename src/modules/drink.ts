import { createTag, createMultiTags } from "./functions";

class Drink {
  private id: string;
  constructor(
    public type: string,
    public size: number,
    public underage: boolean,
    private price: number
  ) {
    this.type = type;
    this.size = size;
    this.underage = underage;
    this.price = price;
    this.id = this.createId();
  }
  // Functions
  createId() {
    return Math.random().toString(8).slice(2);
  }
  getId() {
    return this.id;
  }

  getPrice() {
    return this.price;
  }

  createDrink() {}
  renderDrink() {}
  ageWarning() {
    if (this.underage === false) {
      console.log("Must be over 18 to order");
    }
  }
  // Buttons
}

export { Drink };
