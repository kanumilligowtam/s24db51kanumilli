
var Alcohol = require('../models/Alcohol');
// List of all Alcohol
exports.Alcohol_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Alcohol list');
};
// for a specific Alcohol.
exports.Alcohol_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Alcohol.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
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
exports.Alcohol_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Costume.findById( req.params.id)
// Do updates of properties
if(req.body.Alcohol_type)
toUpdate.Alcohol_type = req.body.costume_type;
if(req.body.Alcohol_size) toUpdate.cost = req.body.Alcohol_size;
if(req.body.Alcohol_price) toUpdate.size = req.body.Alcohol_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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


    // Handle Alcohol create on POST.
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
    