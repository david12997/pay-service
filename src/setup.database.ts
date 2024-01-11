import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';

async function setupDatabase() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
  });

  const sql = fs.readFileSync(path.join(__dirname, 'src', 'create.database.sql')).toString();

  await connection.query(sql);

  await connection.end();
}

setupDatabase().catch(console.error);