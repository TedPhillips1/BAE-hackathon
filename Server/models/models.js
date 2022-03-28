import query from "../db/index.js"

// Get all quotes

export async function getAllQuotes() {
    const response = await query(`SELECT * FROM quotes;`);
    return response.rows;
}

// Post new journal entry

export async function addJournalEntry(body){
    const response = await query(
        `INSERT INTO journal_entries (user_email, date, rating, entry)
        VALUES (
            $1,
            $2,
            $3,
            $4
        ) RETURNING *;`, [body.user_email, body.date, body.rating, body.entry]
    );
    return response.rows
}