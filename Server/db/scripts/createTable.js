import query from "../index.js"


// Create journal table

async function createTable(){

    const response = await query(`CREATE TABLE journal_entries (
        journal_ID SERIAL PRIMARY KEY,
        user_email TEXT,
        date TEXT,
        rating INTEGER,
        entry TEXT
    );`)
    console.log(response.rows)
    return response.rows
}
// Create quotes table

// async function createTable(){

//     const response = await query(`CREATE TABLE quotes (
//         quote_ID SERIAL PRIMARY KEY,
//         author TEXT,
//         quote TEXT
//     );`)
//     console.log(response.rows)
//     return response.rows
// }



createTable()