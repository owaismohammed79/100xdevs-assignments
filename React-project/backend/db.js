const mongoose =require('mongoose');

mongoose.connect('') //Ye mongoose ke url ko .env file me store kiya jaata h usually but apan abhi to practise so...

const TodoSchema =mongoose.Schema({  //Yaha pe mongoose.Schema bhul gya
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', TodoSchema) //Ye puri line hi bhul gya me -_-, aur single quotes me tumnhare db ka naam hoga

module.exports = {todo: todo}  //Yaha pe directly todo ka schema hi export kar rha tha