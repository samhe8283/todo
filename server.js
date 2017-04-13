var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

var todos=[{
    id:1,
    description:'Meet someone for lunch',
    completed:false
},
{
    id:2,
    description:'go to market',
    completed:false
},
           {
    id:3,
    description:'feed the dog',
    completed:true
}
];
app.get('/', function(req,res){
    res.send('Todo API Root');
});

//GET /todo
app.get('/todos',function(req,res){
    res.json(todos);
})

app.get('/todos/:id',function(req,res){
   var todoId = parseInt(req.params.id,10);
    var matchtodo;
    todos.forEach(function(todo){
        if(todoId === todo.id)
            {
                matchtodo=todo;
            }});
    if(matchtodo){
        res.json(matchtodo)
    }else{
        res.status(404)
    }
    
})

app.listen(PORT,function(req,res){
    console.log('server is running on port ' + PORT);
})