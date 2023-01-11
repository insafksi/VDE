class Mother{
    private name: string;
    hair: string;
    eyes: number;
    constructor(n: string, h: string, e: number ){
        this.name = n;
        this.hair =h;
        this.eyes = e;
    }
    speak() {
        console.log(`je suis ${this.name} et j'ai des cheveux ${this.hair}`);
    }
    getName() {
       return this.name; 
    }
}



//class Children extends Mother {

 //   speak() {
   //     console.log(`I' am ${this.name} and I have ${this.hair} hair.`)
    //  }
   // speakMothLan() {
     //   super.speak();
     // }
// }


const person1  = new Mother("Rhea", "Marron", 2);   //type Mother
console.log(person1.getName());


//const person2: Mother = new Children("Déméter", "Bronwn", 2);  //Type children
//console.log(person2);
//person2.speak();