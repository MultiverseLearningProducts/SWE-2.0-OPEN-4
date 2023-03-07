const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

    test('can create a Band', async () => {
        const testBand = await Band.create({ name: 'Nirvana', genre: 'Grunge' })
        expect(testBand.name).toBe('Nirvana')
    });

    test('can create a Musician', async () => {
        await sequelize.sync({ force: true }); // recreate db
        const testMusician = await Musician.create({ name: 'Kurt Cobain', instrument: 'Guitar' })
        expect(testMusician.instrument).toBe('Guitar')
    });

    test('Band can have many Musicians', async () => {
       await sequelize.sync({ force: true }); // recreate db
       let BigBang = await Band.create({ name : 'BIGBANG', genre : 'KPOP'})
       let GD = await Musician.create({ name : 'G-Dragon', instrument : 'Voice'})
       let Top = await Musician.create({ name : 'TOP', instrument : 'Voice'})

       await BigBang.addMusician(GD);
       await BigBang.addMusician(Top);

       const musicians = await BigBang.getMusicians()
       
       expect(musicians.length).toBe(2);
       expect(musicians[0] instanceof Musician).toBeTruthy;
   });
})