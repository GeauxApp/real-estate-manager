'use strict'

var express = require('express');
var router = express.Router();

var Client = require('../models/client');


router.get('/', (req, res) => {
  Client.find({}, (err, data) => {
    if(err) {
      return res.status(400).send(err)
    }
    res.send(data);
  })
})

router.post('/', (req, res) => {
  Client.create(req.body, (err, client) =>{
    if(err) {
      return res.status(400).send(err)
    }
    res.send(client);
  })
});

router.put('/', (req, res) => {
  Client.findByIdAndUpdate(req.body._id, req.body, (err, client) => {
    if(err) {
      return res.status(400).send(err)
    }
    res.end();
  })
})

router.delete('/:id', (req, res) => {
  Client.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      return res.status(400).send(err)
    }
    res.end();
  })
})

module.exports = router;
