import pg from 'pg'
import {  password1, user1, DBPort, theDB, host1} from '../config.js'

const pool = new pg.Pool({
    user: user1,
    host: host1,
    database: theDB,
    password: password1,
    port: DBPort,
    ssl: { rejectUnauthorized: false },
})

export default function query(text, params) {
    return pool.query(text, params)
}
