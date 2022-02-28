//boolean
var isCool = true;
//string
var pets = ["cat", "dog", "pig"];
//array
var names = ["brenda", "louis"];
//object
var keys = {
    a: "key1",
    b: "key2",
    c: "key3"
};
//tuple
var basket;
basket = ["basketball", 5];
//enum
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
var sizeName = Size.small;
var fightRobotArmy = function (robots) {
    console.log("Hello");
};
//function
var fightRobotArmy3 = function (robots) {
    console.log("Hello");
};
//classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "hahaha";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var lion = new Animal("ROOARRR");
lion.greet();
//union
var confused = "hello";
