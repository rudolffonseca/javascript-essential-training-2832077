/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Computer from "./Computer.js";

const myComputer = new Computer("ASUS", "Silver", false, true, 100);

console.log(myComputer);

myComputer.powerSwitch();

console.log(myComputer);
