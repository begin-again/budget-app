import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.DATABASE_APIKEY,
  authDomain: process.env.DATABASE_AUTHDOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.DATABASE_PROJECTID,
  storageBucket: process.env.DATABASE_STORAGEBUCKET,
  messagingSenderId: process.env.DATABASE_MESSAGINGSENDERID,
  appId: process.env.DATABASE_APPID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref().set(null);

// [
//   { description: 'todo', note: '', amount: 0, createdAt: 0 },
//   { description: 'todo', note: '', amount: 0, createdAt: 0 },
//   { description: 'todo', note: '', amount: 0, createdAt: 0 }
// ].map(expense => {
//   database.ref('expenses').push(expense);
// });

// const getExpenses = (snapshot) => {
//   const expenses = [];
//   snapshot.forEach(item => {
//     expenses.push({
//       id: item.key,
//       ...item.val()
//     });
//   });
//   console.log(expenses);
// };

// // child remove
// const removed = database.ref('expenses').on('child_removed', (child) => {
//   console.log('removed', child.key, child.val());
// });

// // child add
// const added = database.ref('expenses').on('child_added', (child) => {
//   console.log('added', child.key, child.val());
// });

// // child changed
// const changed = database.ref('expenses').on('child_changed', (child) => {
//   console.log('added', child.key, child.val());
// });

// const subscriptions = { removed, added, changed };
