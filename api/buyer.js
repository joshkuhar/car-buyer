var router = require('express').Router();
var mongoose = require('mongoose');

var LeadSchema = mongoose.Schema({
  first: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
})

var Lead = mongoose.model('Lead', LeadSchema);


router.post('/lead', (req, res) => {
  var lead = req.body
  Lead.create({
    first: lead.first,
    last: lead.last,
    phone: lead.phone
  }, function(err, lead) {
    if(err){
      res.status(500).json({
        message: 'Internal server error'
      })
      return
    }
    res.status(200).json(lead)
  })
})

module.exports = router;

