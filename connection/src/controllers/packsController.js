'use strict'

var packsController = {};

packsController.saludo = function (req,res,next)
{
    res.render('index');
};
packsController.login = function (req,res,next)
{
    res.render('login');
};
packsController.register=function(req,res,next){
    res.render('register');
};

packsController.imprimir = function(req,res,next)
{
    console.log(req.body);
};


module.exports = packsController;