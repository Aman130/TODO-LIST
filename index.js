const express=require('express');
const path=require('path');
const port=8000;

const db=require('./config/mongoose');

app=express();

app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(path.join(__dirname,'CSS')));
app.use(express.static(path.join(__dirname,'Javascript')));


app.get('/',function(req,res){
    return res.sendFile(path.join(__dirname,'views')+'\\signin.html');
});
app.get('/',function(req,res){
    return res.sendFile(path.join(__dirname,'views')+'\\signup.html');
});
app.get('/todolist',function(req,res){
    return res.sendFile(path.join(__dirname,'views')+'\\todolist.html');
});

app.post('/sign-in',function(req,res){
    
});

app.post('/sign-in',function(req,res){
    
});

app.listen(port,function(err){
    if(err){
        console.log('Error in starting the server');
        return;
    }
    console.log(`Server is running at port: ${port}`);
})