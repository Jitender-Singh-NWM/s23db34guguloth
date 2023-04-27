var express = require('express');
const dog_controlers= require('../controllers/dog');
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }
/* GET costumes */
router.get('/', dog_controlers.dog_view_all_Page );
/* GET detail costume page */
router.get('/detail', dog_controlers.dog_view_one_Page);
/* GET create costume page */
router.get('/create', secured, dog_controlers.dog_create_Page);

/* GET  update page */
router.get('/update', secured, dog_controlers.dog_update_Page);
/* GET delete costume page */
router.get('/delete',secured, dog_controlers.dog_delete_Page);
module.exports = router;
