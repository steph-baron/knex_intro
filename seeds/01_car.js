
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('car').del()
    .then(function () {
      // Inserts seed entries & in ORM (object relational mapping order below)
      return knex('car').insert([
        {
          make: 'Nissan',
          year: 2013,
          model: 'Rogue',
          color: 'White',
          runs: true
        },
        {
          make: 'BMW',
          year: 1970,
          model: '2002',
          color: 'Light Blue',
          runs: true
        },
        {
          make: 'Honda',
          year: 1993,
          model: 'Civic',
          color: 'Rust',
          runs: false
        }
      ]);
    });
};
