const sqlite3 = require("sqlite3").verbose()

//.verbose() provides additional information including SQL statements being executed, the status of the database connection, and any errors that may occur.

//connect to our database
const db = new sqlite3.Database('./mydatabase.db', sqlite3.OPEN_READWRITE, (err) => {
    if(err) {
        console.error(err)
    } else {
        console.log(`Database connected successfully!!!!`)
    }
})

 
//1. is the path to our database [x]
//2. specifies which mode the database should be opened in. read and write [x]
//3. is a callback function that will be executed if the database has successfully established a connection. You can define an error message. [x]



//Create a Table
let sql= `CREATE TABLE IF NOT EXISTS songs(id INTEGER PRIMARY KEY, name, artist, genre)`

db.run(sql)

//db.run() - is a method in sqlite3 is used to execute a single SQL query that doesn't return any data - CREATE, INSERT, UPDATE, DELETE


//Insert information (row) into our table
sql= `INSERT INTO songs(name, artist, genre) VALUES(?,?,?)`

// db.run(sql, ["Shape of You", "Ed Sheeran", "Pop"], (err) => {
//     if(err) {
//         console.error(err)
//     } else {
//         console.log(`row added successfully!`)
//     }
// })

// db.run(sql, ["Billie Jean ", "Michael Jackson", "Pop"], (err) => {
//     if(err) {
//         console.error(err)
//     } else {
//         console.log(`row added successfully!`)
//     }
// })

// db.run(sql, ["November Rain", "Guns N' Roses", "Rock"], (err) => {
//     if(err) {
//         console.error(err)
//     } else {
//         console.log(`row added successfully!`)
//     }
// })

// db.run(sql, ["M.I.A", "Bad Bunny", "Latin"], (err) => {
//     if(err) {
//         console.error(err)
//     } else {
//         console.log(`row added successfully!`)
//     }
// })


//How to query all rows in a table/ how to query just one row
// sql= `SELECT * FROM songs`

// db.all(sql, [], (err, rows) => {
//     if(err) {
//         console.error(err)
//     } else {
//         rows.forEach(row => {
//             console.log(row)
//         })
//     }
// })

//db.all() - returns multiple rows in our tables
// sql = `SELECT * FROM songs WHERE genre = 'Pop'`

// db.all(sql, [], (err,rows) => {
//     if(err) {
//         console.error(err)
//     } else {
//         rows.forEach(row => {
//             console.log(row)
//         })
//     }
// })


//Update table name, 
// sql= `ALTER TABLE songs RENAME TO singles`
// db.run(sql, [], (err) => {
//     if(err) {
//         console.error(err)
//     } else {
//         console.log(`table name sucessfully changed!`)
//     }
// })


//update column name, 
// sql= `ALTER TABLE singles RENAME COLUMN artist TO song_writer`
// db.run(sql, [], (err) => {
//     if(err) {
//         console.error(err)
//     } else {
//         console.log(`column name sucessfully changed!`)
//     }
// })

//update row information
// sql= `UPDATE singles SET song_writer=? WHERE id=?`
// db.run(sql,['Drake', 2], (err) => {
//     if(err) {
//         console.error(err)
//     } else {
//         console.log(`Row information has changed!`)
//     }
// })

//How to delete a table, 
// sql=`DROP TABLE songs`
// db.run(sql)

//delete a row
// sql=`DELETE FROM singles WHERE id=4`
// db.run(sql, [], (err) => {
//     if(err) {
//         console.error(err)
//     } else {
//         console.log(`Row deleted sucessfully!`)
//     } 
// })

//delete a column
sql=`ALTER TABLE singles DROP COLUMN genre`
db.run(sql, [], (err) => {
    if(err) {
        console.error(err)
    } else {
        console.log(`Column deleted sucessfully!`)
    } 
})