const Log = require('../models/logModel');

const createLog = (req, res) => {
  const log = req.body;
  Log.create(log, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Log added');
  });
};

const getLogs = (req, res) => {
  Log.getAll((err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(results);
  });
};

module.exports = {
  createLog,
  getLogs
};
