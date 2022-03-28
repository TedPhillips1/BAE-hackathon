import query from "../index.js"

async function createTable(){

    const response = await query(`INSERT INTO quotes (
        quote_ID SERIAL PRIMARY KEY,
        author TEXT,
        quote TEXT
    );`)
    console.log(response.rows)
    return response.rows
}