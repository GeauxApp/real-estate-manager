'use strict'

var express = require('express');
var router = express.Router();

var Pod = require('../models/pod');


router.get('/', (req, res) => {
  Pod.find({}, (err, data) => {
    if(err) {
      return res.status(400).send(err)
    }
    res.send(data);
  })
})

router.post('/', (req, res) => {
  Pod.create(req.body, (err, pod) =>{
    if(err) {
      return res.status(400).send(err)
    }
    res.send(pod);
  })
});

router.put('/', (req, res) => {
  Pod.findByIdAndUpdate(req.body._id, req.body, (err, pod) => {
    if(err) {
      return res.status(400).send(err)
    }
    res.end();
  })
})

router.delete('/:id', (req, res) => {
  Pod.findByIdAndRemove(req.params.id, (err) => {
    if(err) {
      return res.status(400).send(err)
    }
    res.end();
  })
})

module.exports = router;
