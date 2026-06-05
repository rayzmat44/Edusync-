const Database = require('better-sqlite3')
const path = require('path')
const fs = require('fs')

const dbPath = process.env.DB_PATH || './db/edusync.db'
const db = new Database(dbPath)

// Enable foreign keys
db.pragma('foreign_keys = ON')
module.exports = db