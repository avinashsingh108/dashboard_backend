const express = require('express');
const router = express.Router();
const db = require('../db');  
router.get('/api/component2', (req, res) => {
  db.query('SELECT * FROM component_2_data', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    res.json(results); 
  });
});

router.get('/api/component4', (req, res) => {
  db.query('SELECT * FROM component_4_data', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    res.json(results); 
  });
});

router.get('/api/component6', (req, res) => {
  db.query('SELECT * FROM component_6_data', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'trial' && password === 'assignment123') {
    res.status(200).send({ message: 'Login successful!' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

module.exports = router;
