var Alcohol= require('../models/Alcohol');
exports.Alcohol_list = function(req, res) {
res.send('NOT IMPLEMENTED: Alcohol list');
};
// for a specific Alcohol.
exports.Alcohol_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Alcohol detail: ' + req.params.id);
};
// Handle Alcohol create on POST.
exports.Alcohol_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Alcohol create POST');
};
// Handle Alcohol delete from on DELETE.
exports.Alcohol_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Alcohol delete DELETE ' + req.params.id);
};
// Handle Alcohol update form on PUT.
exports.Alcohol_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Alcohol update PUT' + req.params.id);
};
 
 
exports.Alcohol_list = async function(req, res) {
    try{
    theAlcohol = await Alcohol.find();
    res.send(theAlcohol);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
 
exports.Alcohol_view_all_Page = async function(req, res) {
    try{
    theAlcohol = await Alcohol.find();
    res.render('Alcohol', { title: 'Alcohol Search Results', results: theAlcohol });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
 
 
    // Handle food create on POST.
exports.Alcohol_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Alcohol();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.Alcohol_type = req.body.Alcohol_type;
    document.Brand = req.body.Brand;
    document.Price = req.body.Price;
 
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };