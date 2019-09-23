import { Person } from "./src/interfaces";

const isOpen: boolean = false;

const myName: string = "Ben";

const myAge: number = 31;

const teachingFellows: string[] = ["Ben", "Russel", "Madi", "Tom"];

const me: [string, number] = ["Ben", 31];

enum Job {
  Instructor,
  TeachingFellow,
  Brett
}

const job: Job = Job.TeachingFellow;

const phone: any = "iPhone";

const numPhones: any = 1;

//Functions in Typescript

const sayWord = (word: string): string => {
  console.log(word);
  return;
};

sayWord("Ben");

//Optional Parameters

const sayWordOptional = (word?: string): string => {
  console.log(word || "Hello");
  return word || "Hello";
};

sayWordOptional();
//'Hello'

//Default Params

const sayWordDefault = (word = "Hi"): string => {
  console.log(word);
  return word;
};

sayWordDefault();
//'Hi"

//Implicit Types
let newName = "Ben";
//typescript can infer that this is a string.
//this is the same as newName: string = 'Ben';

newName = "Aaron";
newName = 10;
//newName was implicitly typed as a string so it can't be assigned a number

let newNameTwo = newName;

newNameTwo = 10;
//newNameTwo is implicitly typed as a string because newName was initialized as a string.

//Inferred types even work with variables

//Union Types

let newUnion: string | number | boolean = 13;
newUnion = "Ben";
// newUnion = true;
//uncomment the line above me to fix newUnionTwo;

let newUnionTwo = newUnion;
newUnionTwo = true;
//newUnion was never a boolean so newUnionTwo can't either

//Union Types with functions

const makeMargin = (x: string | number): string => {
  return `margin: ${x}px`;
};
//we don't care if x is a number or string because it will result in the same output in this case
makeMargin(10);
makeMargin("10");
makeMargin(false);
//One of these is not like the other

//Null types
let dog: string = null;
dog = "Belle";
dog = undefined;
dog = null;
dog = 4;
dog = true;
//Most types in Typescript also implicitly have null and undefined types.  See how dog doesn't throw an error when initialized as type: string with value null.  Changing it to a new string is fine, as is changing back to null.  Chaning it to a number or boolean is a problem.
//Null and undefined are automatically added to other types

//What if I don't want cat to be able to be undefined?
let cat: string = null;
cat = "Belle";
cat = undefined;
cat = null;
cat = 4;
cat = true;

//Interfaces - type checking for data that has a certain shape (it should seem like GraphQL)

// the question mark on age makes it optional

const sayName = ({ name, age }: Person): string => {
  console.log(name);
  return name;
};
//the order matters here, javascript devs are used to order mattering

sayName({ name: "Ben", age: 31 });

sayName({ age: 31, name: "Ben" });

sayName({ name: "Ben" });

//the interface can replace named parameters

//interfaces can be used for both the arguments and the return value;
const sayName2 = ({ name, age }: Person): Person => {
  console.log("name: ", name, "age: ", age);
  return { name, age };
};

sayName2({ name: "Ben", age: 31 });

sayName2({ age: 31, name: "Ben" });

//Enums
//an Enum is it's own type
//Typescript has numeric and string based enums

//Numeric Enum
enum Type {
  Video, //0
  Blog, //1
  Quiz //2
}

console.log("Type.Quiz: ", Type.Quiz);
//Type.Quiz === 2;
//This enum has indexes like an array

const createContent = (contentType: Type) => {};

createContent("Video");
//Video !== 'Video';

//String Enum
enum Type2 {
  Video = "VIDEO",
  BlogPost = "BLOG_POST",
  Quiz = "QUIZ"
}

const createContent2 = (contentType: Type2) => {};

createContent2(Type2.Quiz);
console.log("Type2.Quiz: ", Type2.Quiz);

//Not Going to work
createContent2("VIDEO");

//Classes in Typescript

class Team {
  private teamName: string;
  constructor(teamName: string) {
    this.teamName = teamName;
  }
  score(): string {
    console.log("GOOOOOOAL");
    return "Goal!";
  }
}

const avalanche = new Team("Avalanche");
avalanche.score();
console.log(avalanche.teamName);

//private variables prevent use outside of the class
//if it is not explicitly private or public then it will implicitly be public
//readonly will make it assignable either when it is defined or in the constructor

//getters and setters

//Modules
