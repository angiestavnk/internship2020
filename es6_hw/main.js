// First exercise
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
    this.created = new Date().toLocaleString();
  }
}

let dog = new Dog("Dog");
console.log(dog.name);

//Second exercise
async function getData() {
  let data, parsedData;
  try {
    data = await fetch("https://swapi.dev/api/people/1/");
    if (!data.ok) {
      throw new Error();
    }
    parsedData = await data.json();
    console.log(parsedData);
  } catch (e) {
    console.error("Error while fetchinng data");
  }
}
