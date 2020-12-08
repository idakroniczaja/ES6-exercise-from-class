// class
// destructuring 
// objects

const person = {
  name: 'ironhacker',
  age: 25,
  favoriteMusic: 'metal'
};
// es5
// const name = person.name;
// const age = person.age;
// const favoriteMusic = person.favoriteMusic;// person.country = 'spain';// es6
// const { name, age, favoriteMusic, country = 'spain' } = person;// console.log(person.country)// const { name: fullName, age, favoriteMusic, country = 'spain' } = person;// const fullName = person.name;// console.log(`Hello, ${fullName}`);
// nested objects
const person2 = {
  name: 'ironhacker',
  age: 25,
  favoriteMusic: 'metal',
  address: {
    street: 'super cool st',
    number: 123,
    city: 'miami'
  }
};
// es5console.log(person2.address.street);
const { name, age, favoriteMusic, address: { street, number, city } } = person2;
// const street = person2.address.street;console.log(`${name} lives in ${number} ${street}, city of ${city}`);

// arraysconst campuses = ['madrid', 'barcelona', 'miami'];// es5
// const firstCampus = campuses[0];
// const secondCampus = campuses[1];
// const thirdCampus = campuses[2];
// console.log(firstCampus, secondCampus, thirdCampus);// const [firstCampus, secondCampus, thirdCampus] = campuses;
// console.log(firstCampus, secondCampus, thirdCampus)const [first] = campuses;
console.log(first);const [, second] = campuses;
console.log(second);const [,, third] = campuses;
console.log(third); const [firstCampus, secondCampus, thirdCampus, fourthCampus = 'paris'] = campuses; console.log(firstCampus, fourthCampus); // madrid paris 
// nested arrays

 const europeanCampuses = [
   ['madrid', 'es'],
   ['barcelona', 'es'],
   ['berlin', 'de'],
   ['paris', 'fr'],
 ] 
 
 const [
   [campusSpain1],
   [campusSpain2, country],
   [campus3, theCountry]
 ] = europeanCampuses; 
 console.log(campusSpain1, campusSpain2, campus3, country, theCountry);
  // madrid barcelona berlin es de
  // mixed objects and arraysconst 
  customer = {
  name: {
    firstName: 'ivan',
    lastName: 'zoro'
  },
  age: 32,
  preferences: [
    {
      tech: ['cameras', 'smartwatches'],
      books: ['science fiction', 'coding']
    }
  ]
}// const {
//   name: { firstName, lastName },
//   age,
//   preferences: [{ tech, books }]
// } = customer;
const {
  name: { firstName, lastName },
  age,
  preferences: [{ tech: technology, books: literature }]
} = customer;console.log(firstName, lastName, age);
console.log(technology, literature)

// 2: Given the object, use function parameter destructuring to get the following output:

const greenSmoothie = {
  leaf: 'spinach',
  veggie: 'bok choy',
  seed: 'ground flex seeds',
  nut: 'peanut',
  liquid: 'almond milk'
};


//const {leaf, veggie, seed,nut,liquid} = greenSmoothie

function getIngredients({leaf, veggie, seed, nut, liquid}) {
  return `To make the green smoothie,  you  should add: ${leaf}, ${veggie}, ${seed}, ${nut} and ${liquid}.`;
}

getIngredients(greenSmoothie);
// => expected: // To make a green smoothie, you should add: spinach, bok choy, ground flex seeds, peanut and almond milk.