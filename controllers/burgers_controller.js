var express = require("express");
var router = express.Router();
var db = require("../models");


router.get("/", function(req, res) {
    db.BurgerTables.findAll() 
        .then(function(burgerSQL_db) {
            return res.render("index", { burgerTables: burgerSQL_db });     
    });
});

router.post("/", function(req, res) {
    db.BurgerTables.create({
        burger_name: req.body.burger_name
    }).then(function(burgerSQL_db) {
        res.redirect("/");
    });
});


router.put("/:id", function(req, res) {
    
    db.BurgerTables.update(
        {devoured: true}, 
        {where: { id: req.params.id } })
            .then(function(burgerSQL_db) {
                res.redirect("/")
     });
});


module.exports = router;