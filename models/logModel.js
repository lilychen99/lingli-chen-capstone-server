const db = require('../config/db');

const Log = {
  create: (log, callback) => {
    const sql = 'INSERT INTO logs SET ?';
    db.query(sql, log, callback);
  },

  getAll: (callback) => {
    const sql = 'SELECT * FROM logs';
    db.query(sql, callback);
  }
};

module.exports = Log;
