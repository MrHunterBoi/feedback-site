const sql = require('mssql');
const config = {
  user: 'API',
  password: '12345',
  server: 'localhost',
  database: 'Messages',
  trustServerCertificate: true
};

const addToDb = async (data) => {
  try {
    await sql.connect(config);
    await sql.query`INSERT INTO Messages VALUES (${data.name}, ${data.email}, ${data.msg})`;
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

module.exports = {
  addToDb
}