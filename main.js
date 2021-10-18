var GenericMap = /** @class */ (function () {
    function GenericMap() {
        this.items = {};
    }
    GenericMap.prototype.setItems = function (key, item) {
        this.items[key] = item;
    };
    GenericMap.prototype.getItem = function (key) {
        return this.items[key];
    };
    GenericMap.prototype.clear = function () {
        this.items = {};
    };
    GenericMap.prototype.printMap = function () {
        var _this = this;
        var itemsAsString = Object.getOwnPropertyNames(this.items)
            .map(function (key) { return "'" + key + "':'" + _this.getItem(key) + "'"; }).join(",");
        return "" + itemsAsString;
    };
    return GenericMap;
}());
var numb = new GenericMap();
numb.setItems("one", 6);
numb.setItems("two", 67);
console.log(numb.printMap());
numb.clear();
console.log(numb.printMap());
var str = new GenericMap();
str.setItems("user1", "Arunima");
str.setItems("user2", "Prem");
console.log(str.printMap());
