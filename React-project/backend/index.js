//Basic boiler plate code for express
const express = require('express');
const app = express();
const {createTodo, updateTodo} = require('./types')
const {todo} = require('./db')

app.use(express.json());

app.get('/todos', (req,res)=>{
    //Gets all the todos
    todo.find({})         //or await
    .then((response)=>{
        res.json({
            Todos: response
        })
    })

})

app.post('/todo', (req,res)=>{
    const newTodo = req.params.todo;              //Idhar pe mai params se lene ki soch raha tha aur fir yaad aya ki url me object bhejne me dikkat
    const parsedTodo = createTodo.safeParse(newTodo); //hogi isiliye body me send kar rha data
    if(!parsedTodo.success){
        res.status(404).json({
            "msg": "Wrong format of todo"
        })
    } else{
        todo.create({           //Yaha pe await karna hota he ki agar network busy he to...
            title: newTodo.title,
            description: newTodo.description,
            completed: false
        })
    }
})

app.put('/completed', (req,res)=>{
    const todo = req.body;   //Yaha mene zod validation karne ke begair he req.body se data liya aur fir findOne karke delete mardo
    const parsed = updateTodo.safeParse(todo);  //Mereko pata nhi hkirat req.body pe he safe parse kar rha tha aur me req.body.id pe
    if(!parsed.success){
        res.status(404).json({
            "msg": "Wrong format of updation"
        })
    } else{
        todo.update({
            _id: todo.id
        },{
            completed: true
        })
        .then(()=>{
            res.json({
                msg: "Todo marked as completed"
            })
        })
    }
})



app.listen(3000, ()=>{
    console.log("Port open ar port 3000")
})