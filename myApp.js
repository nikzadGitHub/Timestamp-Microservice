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

var arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

var createManyPeople = function(arrayOfPeople, done) {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};

var findPeopleByName = function(personName, done) {
  Person.find({name: personName}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findPersonById = (personId, done) => {
  Person.findOne({_id: personId}, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findOne(personId, function (err, person) {
    if (err) return console.log(err);
    
    person.favoriteFoods.push(foodToAdd);

    person.save((err, data)=>{
      if (err) return done(err)
      return done(null, data)
     });
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  Person.findOneAndUpdate({ name: personName }, { age: ageToSet },  {new: true}, (err, updatedDoc) => {
    if(err) return console.log(err);
    done(null, updatedDoc);
  });
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove ({ _id: personId }, (err, query) => {
    if(err) return console.log(err);
    done(null, query);
  });
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({name: nameToRemove}, (err, response) => {
    if(err) return console.log(err);
    done(null, response);
  })
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
   Person.find({favoriteFoods: foodToSearch})
    .sort({name:  "asc"})
    .limit(2)
    .select({name:1, age: 0, favouriteFoods:1})
    .exec(function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  }); 
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
