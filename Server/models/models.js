
// Get all quotes

export async function getAllQuotes() {
    const response = await query(`SELECT * FROM quotes;`);
    return response.rows;
}

// Post new journal entry

export async function addJournalEntry(body){
    const response = await query(
        `INSERT INTO journal (user_email, date, entry)
        VALUES (
            $1,
            $2,
            $3
        ) RETURNING *;`, [body.userEmail, body.date, body.entry]
    );
    return response.rows
}