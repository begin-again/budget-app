console.log('destructure');

const person = {
  name: 'Todd',
  age: 22,
  mood: 'cool',
  location: {
    city: 'Da Bern',
    temp: 88
  }
};

const nums = [1, 2, 4];

const [a, b, c] = nums;
console.log(a, b, c);

const { name, age, location, mood: moody = 'bland' } = person;
console.log(`${name} is ${age} and feeling ${moody}`);

const { city, temp: temperature } = location;
console.log(`Its is ${temperature} in ${city}`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holliday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: PublisherName = 'Self Published' } = book.publisher;
console.log(PublisherName);

const address = ['1299 south juniper st', 'new bern', 'nc', 29123];
// const address = [];

const [, , state = 'unknown'] = address;

console.log(`You are in ${state}`);

const item = ['coffee (hot)', 2.0, 2.5, 2.75];

const [thing, , price] = item;
console.log(`A ${thing} costs $${price}0`);
