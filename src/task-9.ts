interface Container<T> {
  items: T[];
  getItem(item: number): T | undefined;
  addItem(newItem: T): void;
}

const numberContainer: Container<number> = {
  items: [1, 2, 3, 4, 5],
  getItem(item: number): number {
    return this.items[item];
  },
  addItem(newItem: number): void {
    this.items.push(newItem);
  },
};
const stringContainer: Container<string> = {
  items: ["first", "second", "third"],
  getItem(item: number): string {
    return this.items[item];
  },
  addItem(newItem: string): void {
    this.items.push(newItem);
  },
};

function getLastElement<T>(container: Container<T>): T | undefined {
  return container.items[container.items.length - 1];
}

numberContainer.addItem(1);
numberContainer.addItem(20);
console.log(numberContainer.getItem(0));
console.log(numberContainer.getItem(1));
console.log(numberContainer.getItem(10));

stringContainer.addItem("Hello");
stringContainer.addItem("World");
console.log(stringContainer.getItem(0));
console.log(stringContainer.getItem(1));
console.log(stringContainer.getItem(10));

console.log(getLastElement(numberContainer));
console.log(getLastElement(stringContainer));
