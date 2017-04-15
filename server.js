var express = require('express');
var app = express();
var bodyparser =require('body-parser');
var _ = require('underscore');

var PORT = process.env.PORT || 3000;

var todos=[
];
var todoid = 1;

app.use(bodyparser.json());

app.get('/', function(req,res){
    res.send('Todo API Root');
});

//GET /todo
app.get('/todos',function(req,res){
    res.json(todos);
})

app.get('/todos/:id',function(req,res){
   var todoId = parseInt(req.params.id,10);
    var matchtodo = _.findWhere(todos,{id:todoId});
   
    if(matchtodo){
        res.json(matchtodo)
    }else{
        res.status(404).send();
    }
    
});

//POST /todos

app.post('/todos',function(req,res){
    var body=req.body;
	if(!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim())
		{
			return res.status(404).send('server not respond');
		}
    body.id =todoid;
    todoid ++;
    todos.push(body);
    res.json(body);
})

app.listen(PORT,function(req,res){
    console.log('server is running on port ' + PORT);
})