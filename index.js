const env = 'development'
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

// knex('car').then(function(result){
//   console.log(result);
//   knex.destroy();
// })
// .catch(function (err) {
//   console.log(err);
//   process.exit(1);
// });

console.log("Show me a car that runs");

knex('car')
.where('model', 'Civic')
.then(function(result){
  console.log(result);
  knex.destroy();
})
.catch(function (err) {
  console.log(err);
  process.exit(1);
});
