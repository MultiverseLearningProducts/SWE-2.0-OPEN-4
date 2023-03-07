const {Musician, Band} = require("../models/index");
const {sequelize} = require("./db");
const {seedMusician, seedBand} = require("./seedData");

const syncSeed = async () => {
    await sequelize.sync({force: true});

    await Musician.bulkCreate(seedMusician);
    await Band.bulkCreate(seedBand)
    
}

syncSeed()

