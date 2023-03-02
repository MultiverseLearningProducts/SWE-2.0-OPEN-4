const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'associationsdatabase.sqlite'
})

/* ------------------------------------------------------------------------------ */
//example 1:1 - one-to-one
const Person = sequelize.define('Person', {
    name: DataTypes.STRING,
});
  
const Passport = sequelize.define('Passport', {
    number: DataTypes.STRING,
});
  
Person.hasOne(Passport);
Passport.belongsTo(Person);
  
/* ------------------------------------------------------------------------------ */

//example 1:n one-to-many
const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
});
  
const Order = sequelize.define('Order', {
    orderNumber: DataTypes.INTEGER,
});
  
Customer.hasMany(Order);
Order.belongsTo(Customer);

/* ------------------------------------------------------------------------------ */

//example n:m many-to-many
const Student = sequelize.define('Student', {
    name: DataTypes.STRING,
});
  
const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
});
  
const Enrollment = sequelize.define('Enrollment', {});
  
Student.belongsToMany(Course, { through: Enrollment });
Course.belongsToMany(Student, { through: Enrollment });


/* ------------------------------------------------------------------------------ */

// Sync the models to the database
sequelize.sync({ force: true })
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((err) => {
    console.error('Unable to sync the database', err);
  });