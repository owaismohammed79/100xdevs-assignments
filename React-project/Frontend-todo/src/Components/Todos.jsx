

export default async function Todos({todos}){  //Mai yahi pe bakend hit karne ki koshish kar rha tha -_- balki use input me leke sirf display karna tha
    {todos.map(function(todo){
        return(
            <>
                <h2>{todo.title}</h2>
                <h4>{todo.description}</h4>
                <button onClick={()=>{
                    todo.completed = true
                }
                }>{todo.completed ? 'Completed' : 'Mark as completed'}</button>
            </>
        )
    })}
}
