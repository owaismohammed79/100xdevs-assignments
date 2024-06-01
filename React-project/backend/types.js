const zod = require('zod');

const createTodo = zod.object({  //Yaha pe curly brackets ka bhi dhyan do
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string()
})

module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}

//Zod validation me sirf check kar rhe he ki user title aur description sahi format me de rha he ki nahi aur mongoose me completed wala attribute extra add huwa he. Also ek double layered protection provide karta he