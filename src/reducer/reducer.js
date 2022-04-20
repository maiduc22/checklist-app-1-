

const reducerFn = (state = [], action) => {
    switch (action.type){
        case "Add":
            return [...state, 
                {
                    id: action.id, 
                    title: action.title,
                    isDone: false,
                    level: action.level,
                    deadline: action.deadline,
                }]
        case "Finish":{
            return state.map( todo => {
                if(todo.id !== action.id) return todo
                else return {
                    id: todo.id, 
                    title: todo.title,
                    isDone: !todo.isDone,
                    level: todo.level,
                    deadline: todo.deadline,
                    timeLeft: todo.timeLeft
                }
            })
        }
        case "Delete":{
            return state.filter(todo => todo.id !== action.id)
        }
        case "Clear":{
            console.log("Clear All")
            return []
        }
        case "Edit":{
            return state
        }
        default:
            return state
    }
}

export default reducerFn