const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydatabase.db');

db.serialize(() => {
  // create tables and perform other database operations here
  db.run(`DELETE FROM mytable`)
  
  db.run(`CREATE TABLE IF NOT EXISTS mytable (id INTEGER , name TEXT);`)

  db.run(`INSERT INTO mytable (id, name) VALUES (1, 'John');`)
  db.run(`INSERT INTO mytable (id, name) VALUES (2, 'Jane');`)
  db.run(`INSERT INTO mytable (id, name) VALUES (3, 'akdlfajsd');`);

});

db.close();
