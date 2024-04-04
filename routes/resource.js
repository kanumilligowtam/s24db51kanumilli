var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Alcohol_controller = require('../controllers/Alcohol');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
router.post('/Alcohol', Alcohol_controller.Alcohol_create_post);
router.delete('/Alcohol/:id', Alcohol_controller.Alcohol_delete);
router.put('/Alcohol/:id', Alcohol_controller.Alcohol_update_put);
router.get('/Alcohol/:id', Alcohol_controller.Alcohol_detail);
router.get('/Alcohol', Alcohol_controller.Alcohol_list);
module.exports = router;