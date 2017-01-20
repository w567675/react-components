import './b';
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

class smallStudent extends Student {
    constructor(x, y, z) {
        super(x, y, z);
    }
    a() {
        [].map(() => {

        })
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);


const a: number = 1;
const b: string = '2';
const c: boolean = true;
const d: Array<number> = [1, 2, 3];
let e : [number, string];
e = [1, '2'];


enum color { red, yellow, green }
let f:color = color.red;


let sure: Object = 4;
sure.toString();


let list: any[] = [1, , 'ss']
list[1] = true;



const wranUser = (): void => {
    alert(22222);
}


let someValue: any = 'this is string';

let strLength: number = (someValue as string).length;


let obj = {x: 1, y: 2};
const {x: xx, y: yy} : {x: number, y: number} = obj;

const obj2 = {...obj, y: 3};

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

const createSquare = (config: SquareConfig): {color: number} => {
    console.log(config);
    let newSquare = {
        color: 111,
        area: 100,
    };
    if(config.color) {
        newSquare.color = Number(config.color);
    }
    return newSquare; 
}

createSquare({color: '1', width: 1, a: 1});



interface SearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (src, sub) => {
    return false;
}
mySearch('1', '2');

interface StringArray {
    [index: string]: string;
}

let myArray: StringArray;
myArray  = {x: '1'};
const myStr: string = myArray[1]


class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}
interface NotOkay {
    [x: number]: Dog;
    [x: string]: Animal;
}


interface NumberDictionnary {
    readonly [index: string]: Object;
    length: number;
    name: string;
}

const NumberDictionnaryObj: NumberDictionnary = {
    x: 1,
    length: 1,
    name: 'xxx'
}
const NumberDictionnaryObj2 = NumberDictionnaryObj as {[index: string]: Object;};
NumberDictionnaryObj2['x'] = 1;





interface ClockInterface {
    tick();
}
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log('tick tock');
    }
}
const createClock = (ctor: ClockConstructor, hour: number, minute: number) : ClockInterface => {
    return new ctor(hour, minute);
}
const analog = createClock(AnalogClock, 12, 17);



interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLenth: number;
}
const square = <Square>{};
square.color = 'bule';


interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}


const getCounter = (): Counter => {
    let counter = ((start: number) => {}) as Counter ;
    counter.reset = function () {};
    return counter;
}
let cc = getCounter();
cc.reset();


class Control {
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control {
   xx2() {

   }
}

class Animal2 {
    protected constructor(protected name: string) {
       
    }
    sayName() {
        console.log(this.name);
    }
}
class Horse extends Animal2 {
    static origin = {x: 0, y: 0};
    constructor(private name2: string) {
        super(name2);
    }
    get fullName(): string {
        return this.name;
    }
    set fullName(name: string) {
        this.name = name + Horse.origin.x;
    }
}
let tom: Horse = new Horse('sss');
tom.fullName = '1';
tom.sayName();

class Animal3 {
    makeSound(): number {
        return 2222;
    }
}

class Horse2 {
    makeSound(): number {
        return 1111;
    }
}



let myAdd: (baseValue:number, increment:number) => number = function(x, y) {
    return x + y;
}


interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker(this: Deck) {
        return () => {
            return {
                suit: '1',
                card: 1,
            }
        }
    }
}
let cardPicker = deck.createCardPicker();


let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };

function pickCard(x): any {
    
}
pickCard([]);

function ide<T>(arg: T): T {
    return arg;
}
ide('string');

const logide = <T>(arg: T[]): T[] => {
    console.log(arg.length);
    return arg;
}
logide(['1'])


let myide: <T>(arg: T) => T;
let myide2 : {<T>(arg: T): T}

interface Generic<T> {
    (arg:T): T;
}
let myide3: Generic<number>;

class GenericNumberLimit {
    length: number;
}

function GenericNumber<T extends GenericNumberLimit>(args: T): T {
    if(args.length) {

    }
    return args;
}


function copyFields<T extends U, U>(target: T, source: U): T {
    return target;
}
const x = {a: 1, b: 1};
copyFields(x, {a: 1});


class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animall {
    numLegs: number;
}

class Bee extends Animall {
    keeper: BeeKeeper;
}

class Lion extends Animall {
    keeper: ZooKeeper;
}

function findKeeper<A extends Animall, K> (a: { new(): A;
    prototype: {keeper: K} }): K {
    return a.prototype.keeper;
}
findKeeper(Lion);

function create<T>(c: {new(): T; }): T {
    return new c();
}

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
};

declare enum Enum {
    A = 1,
    B,
    C = 2
}

const enum Directions {
    Up,
    Down,
    Left,
    Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]

class Size {
    private a;
    feet: string;
    constructor(name: string) {

    }
}
class Size2 extends Size {
    
    feet: string;
    constructor(name: string) {
        super(name);
    }
}



var s11111: Size ;
var ssssssss1: Size2;

interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    return {
        fly() {

        },
        swim() {

        },
        layEggs() {

        }
    } 
    // ...
}

let pet = getSmallPet();
pet.layEggs();


const isFish = (pet: Bird | Fish): pet is Fish => {
    return (pet as Fish).swim !== undefined;
}

if(isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}


type Alias = { num: number };
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;


interface Box {
    width: number;
    height: number;
    a(): number;
}
interface Box {
    scale: number;
    a(): string; 
}


