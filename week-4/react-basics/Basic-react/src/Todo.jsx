import { useState } from "react";


export default function Todo(){
    const [todos, setTodos] = useState([{}]);

    function addTodo(){
        const key = todos.length + 1
        setTodos([...todos,{
            id: key,
            title: "New Todo",
            description: "You have to complete this"
        }]);
    }

    function Display({ todo }){ //You should destructure the prop here
        return (
            <div>
                <h1>{todo.title}</h1>  
                <p>{todo.description}</p>
            </div>
        ); //Isme pata nahi kyu vs code h1, p me bata raha ki missing he props but work kar raha he
    }

    return(
        <>
            <button onClick={addTodo}>Add Todo</button>
            {todos.map((todo)=>{
                return(
                <Display key = {todo.id} todo = {todo} /> //Bhai yaha pe comma nahi aata parameter paas karte samay bas space hota h
                )
            })}
        </> //Yaha map function ke syntax me bhi galti kar raha tha mai, wo callback function me return statement ke andar rahega jo bhi return karna h. Sirf ye nahi wo key key hi rahega kyunki wo pre defined he aur function definition me accept karna bhi nahi hota h
    );
}
