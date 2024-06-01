import { useState } from "react"

export default function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");

    return (
        <>
            <h2>Create a todo</h2>
            <form action="https://localhost/todo" className="createTodo" method="post">  {/*To yaha pe action me route likha he jaha pe ye hit karega aur post method use karke */}
                <input type="text" placeholder="Title" onChange={function(e){
                    setTitle(e.target.value);
                }}/>
                <input type="text" placeholder="Description" onChange={function(e){
                    setdescription(e.target.value);
                }}/>
                <button type="submit" onClick={function (){
                    fetch('http://localhost:3000/todo',{method: "POST",             //Iske badle axios library use karenge further
                                    body: JSON.stringify({  //Isko stringify karke hi bhejna h
                                        title: title,
                                        description: description
                                    }),
                                    headers:{                                           //Ye dena padta he pehle se hi batane ke liye ki json file he
                                        "Content-type": "application/json"
                                    }
                                })
                                .then(function(){
                                    alert("Todo added");
                                })
                }}>Create Todo</button>
            </form>
            <br /><br />
        </>
    )
}

