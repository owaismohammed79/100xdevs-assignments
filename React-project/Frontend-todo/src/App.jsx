import { useState } from "react"
import { CreateTodo } from "./Components/CreateTodo"
import {Todos} from "./Components/Todos"

function App() {
  const [todos, setTodos] = useState([]);

  fetch('http://localhost:3000/todos')   //This is not the right way of hitting the backend as you'll get a cors error i.e your frontend with some
  .then(async function(res){          //URL can't silently hit some other backend URL until it is allowed to do so. For that install cors in your 
    const json = await res.json();    //Backend file and then app.use(cors({origin: 'https://localhost:5173"})) will allow to hit the backend from
    setTodos(json.todos);             //the specified front-end link only, if left empty then anyone can hit. Also this is wrong coz as soon the 
  })    //component renders fetch request is sent and now setTodos is called which internally re-renders the same component and now is in inf loop
  return (  //Instead we should use useEffect hook
    <>
    <CreateTodo />
    <Todos todos={todos}/>
    </>
  )
}

export default App
