// Dependencies 

var express=require("express");
var path=require("path");
//set up express app
var app=express();
var PORT=3000;
//set up express app to handle data parsing
app.use(express.urlencoded({extend:true}));
app.use(express.json());
app.use(express.static('public'));
//fs 
'use strict'

const fs= require('fs')


//Routes 
//not sure if I need a GET for this page
app.get("/",function(req,res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
// functoion to get notes display all notes
app.get("/notes",function(req,res)  {
    res.sendFile(path.join(__dirname,"notes.html"));
});

// get * should return the index file

// app.get("*",function(req,res){
//     res.send(path.join(_dirname,"notes.html"))
// })


//Display notes using json 
fs.readFile('db.json', (err, data) => {
    if (err) throw err;
    let notes = JSON.parse(data);
    console.log(notes);
    app.get('/api/notes',function(req,res){
        return res.json(data)

    })
});



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



