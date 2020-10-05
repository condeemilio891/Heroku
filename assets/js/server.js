// Dependencies 
var express=require("express");
var path=require("path");
//fs module dependenciess
var http= require("http");
var fs= require('fs');
//set up express app
var app=express();
var PORT=3000;
//set up express app to handle data parsing
app.use(express.urlencoded({extend:true}));
app.use(express.json());
app.use(express.static('public'));

//Routes 
//not sure if I need a GET for this page
app.get("/",function(req,res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes",function(req,res)  {
    res.sendFile(path.join(_dirname,"notes.html"))
})

// get * should return the index file

// app.get("*",function(req,res){
//     res.send(path.join(_dirname,"notes.html"))
// })


//create an api route that uses the db.json file
app.get("/api/notes",function(req,res){
    res.sendFile(path.join(__dirname,'notes.html'))
})


//create new notes/ req.body meaning?

app.post('/api/notes',function(req,res){
    var newNote=req.body;

    console.log(newNote);

    //add the new note to the active note array 

    activeNote.push(newNote);


    res.json(newNote);
});

//start server to begin listening 

app.listen(PORT,function(){
    console.log('listening on PORT '+PORT);

});



