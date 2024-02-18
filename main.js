function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return title + " by " + author + ", " + pages  + ", " + read;
    }
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", "295", "not read yet");
console.log(book1.info());

const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
};
  person.name;
  person.name[0];
  person.age;
  person.bio();
  // "Bob Smith is 32 years old."
  person.introduceSelf();
  // "Hi! I'm Bob."
    

  const person1 = {
    name: "Chris",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };
  
  const person2 = {
    name: "Deepti",
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };
  
  person1.introduceSelf();
  person2.introduceSelf();

  function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
    return obj;
  }
  
  const salva = createPerson("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie = createPerson("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."

function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }

const salva1 = new Person("Salva");
salva.name;
salva.introduceSelf();
// "Hi! I'm Salva."

const frankie1 = new Person("Frankie");
frankie.name;
frankie.introduceSelf();
// "Hi! I'm Frankie."
