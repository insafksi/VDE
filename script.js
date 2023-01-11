var Mother = /** @class */ (function () {
    function Mother(n, h, e) {
        this.name = n;
        this.hair = h;
        this.eyes = e;
    }
    Mother.prototype.speak = function () {
        console.log("je suis ".concat(this.name, " et j'ai des cheveux ").concat(this.hair));
    };
    Mother.prototype.getName = function () {
        return this.name;
    };
    return Mother;
}());
//class Children extends Mother {
//   speak() {
//     console.log(`I' am ${this.name} and I have ${this.hair} hair.`)
//  }
// speakMothLan() {
//   super.speak();
// }
// }
var person1 = new Mother("Rhea", "Marron", 2); //type Mother
console.log(person1.getName());
//const person2: Mother = new Children("Déméter", "Bronwn", 2);  //Type children
//console.log(person2);
//person2.speak();
