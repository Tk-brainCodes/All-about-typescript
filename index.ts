//boolean
let isCool:boolean = true;
//string
let pets:string[] = ["cat", "dog", "pig"]
//array
let names: Array<string> = ["brenda", "louis"]
//object
let keys: object = {
    a: "key1",
    b: "key2",
    c: "key3"
}

//tuple
let basket: [string, number];
basket = ["basketball",5]

//enum
 enum Size {small = 1, medium = 2, large = 3}
 let sizeName : number = Size.small;

 //interface
 interface Robotamrmy {
     count: number,
     type: string,
     magic: string
 }

 let fightRobotArmy = (robots: Robotamrmy) => {
     console.log("Hello");
 }

 //function
 let fightRobotArmy3 = (robots: Robotamrmy): void => {
     console.log("Hello");
 }

 //classes
 class Animal {
     sing: string = "hahaha";
     constructor(sound: string){
         this.sing = sound
     }
     greet() {
         return `Hello ${this.sing}`
     }
 }

 let lion = new Animal("ROOARRR")
 lion.greet();

 //union
 let confused : string | number = "hello";
