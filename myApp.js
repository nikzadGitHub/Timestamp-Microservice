require('dotenv').config()
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name:  {
    type: String,
    required: [true, 'Why no name?']
  },
  age: Number,
  favoriteFoods: [String],
});

let Person = mongoose.model('Person', schema);


console.log(123);
console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });


const createAndSavePerson = (done) => {
  var person = new Person({name: 'Ben', age: 23, favouriteFoods: ['tuna', 'bread']})
 person.save((err, data)=>{
  if (err) return done(err)
  return done(null, data)
 });
};

let arrayOfPeople = [{name: 'Ben', age: 23, favouriteFoods: ['tuna', 'bread']}, {name: 'Ben', age: 23, favouriteFoods: ['tuna', 'bread']}, {name: 'Ben', age: 23, favouriteFoods: ['tuna', 'bread']}];

const createManyPeople = (arrayOfPeople, done) => {

  var person = new Person();
  person.create(arrayOfPeople, (err, data)=>{
    if (err) return done(err)
    return done(null, data)
  });

  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
