const express=require('express');
const path=require('path');
const port=8000;
const cors = require('cors');
const db=require('./config/mongoose');



app=express();
app.use(cors({credentials: true, origin: true}));
const task = require('./Models/todo.js');

app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(path.join(__dirname,'CSS')));
app.use(express.static(path.join(__dirname,'Javascript')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/',function(req,res){
    return res.sendFile(path.join(__dirname,'views')+'\\signin.html');
});
app.get('/',function(req,res){
    return res.sendFile(path.join(__dirname,'views')+'\\signup.html');
});

app.get('/todolist',function(req,res){
    return res.sendFile(path.join(__dirname,'views'+'\\todolist.html'));
});

app.post('/api1',function(req,res){
    task.findOneAndDelete({'mytask':req.body.use}, function(err) {
        if (err) {
            console.log(err);
        }
    });
    return;
});

app.get('/getapi',function(req,res){
    var ipsumTextArray;
    task.find({}, function(err, allIpsumTexts) {
        if (err) {
            console.log(err);
        } else {
           ipsumTextArray=allIpsumTexts;
        }
        res.send(ipsumTextArray);
    });
});


app.post('/add-task',function(req,res){
    task.create({
        task : req.body.todoitems,
    },function(err,newTask){
        if(err){
            console.log('Error in creating task!!!');
            return;
        }
        return res.redirect('back');
    })
});


app.listen(port,function(err){
    if(err){
        console.log('Error in starting the server');
        return;
    }
    console.log(`Server is running at port: ${port}`);
})