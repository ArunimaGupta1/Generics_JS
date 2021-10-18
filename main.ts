class GenericMap <T extends number | string>{

    private items: { [key: string]: T } = {};

    setItems(key: string, item: T): void {
        this.items[key] = item;
    }

    getItem(key: string): T {
        return this.items[key];
    }

    clear(): void {
        this.items = {};
    }

    printMap(): string {
        const itemsAsString = Object.getOwnPropertyNames(this.items)
            .map(key => `'${key}':'${this.getItem(key)}'`).join(",");


        return `${itemsAsString}`;
    }
}

const numb = new GenericMap<number>();
numb.setItems("one", 6);
numb.setItems("two", 67);
console.log(numb.printMap());
numb.clear();
console.log(numb.printMap());

const str = new GenericMap<string>();
str.setItems("user1","Arunima");
str.setItems("user2","Prem");
console.log(str.printMap());