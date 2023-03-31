var express = require('express');
var router = express.Router();
const Database = require("./users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/encrypt', async function(req, res, next) {
  console.log(req.body);
  await Database.create(req.body)
  res.send('ok');  
});

router.post('/decrypt',async function(req, res, next) {
  console.log(req.body)
  const deta = await Database.findOne({pwsd:req.body.dec})
  if(!deta) res.send("no data") 
  res.send(deta.pin);
});

module.exports = router;
