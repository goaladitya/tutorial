var express=require("express");
var app=express();

app.set('view engine','ejs');
// app.use('/assets',function(req,res,next){
//     next();
//});
//or
app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
    res.render('home',{});
});
app.get('/contact',function(req,res){
    res.render('contact',{});
});
app.get('/profile/:name',function(req,res){
    var data={age:29,job:'ninja',hobbies:['chess','coding']};
    res.render('profile',{data:data,name:req.params.name});
});

app.listen(3000);