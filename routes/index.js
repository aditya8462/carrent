var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/getcar',function(req,res){
  res.render("userlogin",{view:false, msg:''})
  })
  router.get('/getamount',function(req,res){
  var pn=req.query.pname
  // var dis=req.query.dis
  var rate=0
  if(pn=="Sedan")
  {rate=13}
  else if(pn=="SUV")
  {rate=15}
  else if(pn=="Mini")
  {rate=10}
  var na=rate*req.query.dis
  res.render("car",{view:true,carname:pn,distance:req.query.dis,rate:rate,na:na})
  })
  router.post('/chklogin',function(req,res){
    console.log(req.body)
  var uid=req.body.uid
  var pwd=req.body.Password
  if(uid=="aditya" && pwd=="8462")
  res.render("car",{view:false})
  else 
  res.render("userlogin",{msg:'InvalidUID/Password'})
  })
module.exports = router;
