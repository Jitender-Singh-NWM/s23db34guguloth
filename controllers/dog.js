var Dog = require('../models/Dog');
// List of all Costumes
/*exports.dog_list = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog list');
};*/
exports.dog_list = async function(req, res) {
    try{
    theDogs = await Dog.find();
    res.send(theDogs);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


   exports.dog_view_all_Page = async function(req, res) {
    try{
    theCostumes = await Dog.find();
    res.render('Dog', { title: 'Dog Search Results', results: theCostumes });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


// for a specific Costume.
exports.dog_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog detail: ' + req.params.id);
};
// Handle Costume create on POST.
// Handle Costume create on POST.
exports.dog_create_post = async function(req, res) {
    console.log(req.body)
    let dog = new Dog();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    dog.Breed = req.body.Breed;
    dog.Dimension = req.body.Dimension;
    dog.value = req.body.value;
    try{
    let result = await dog.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
/*exports.dog_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog create POST');
};*/
// Handle Costume delete form on DELETE.
exports.dog_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.dog_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Dog update PUT' + req.params.id);
};