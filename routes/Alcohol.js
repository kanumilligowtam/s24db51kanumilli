var express = require('express');
const Alcohol_controlers= require('../controllers/Alcohol');
var router = express.Router();
/* GET Robots */
 
router.get('/', Alcohol_controlers.Alcohol_view_all_Page);
 
router.put('/', function(req, res) {
    if(req.body.checkboxsale)toUpdate.sale = true;
    else toUpdate.same = false;
    })
router.get('/', Alcohol_controlers.Alcohol_delete );
/* GET detail Alcohol page */
router.get('/detail', Alcohol_controlers.Alcohol_view_one_Page);
module.exports = router;