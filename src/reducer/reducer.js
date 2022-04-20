

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
                else return {...todo, isDone: !todo.isDone}
            })
        }
        case "Delete":{
            return state.filter(todo => todo.id !== action.id)
        }
        case "Clear":{
            console.log("Clear All")
            return []
        }
        case "Edit_Title":{
            return state.map(todo => {
                if(todo.id !== action.id) return todo
                else {
                    // console.log(action.title)
                    return {...todo, title: action.newtitle}
                }
            })
        }
        case "Edit_Level":{
            return state.map(todo => {
                if(todo.id !== action.id) return todo
                else return {...todo, level: action.newlevel}
            })
        }
        case "Edit_Deadline":{
            return state.map(todo => {
                if(todo.id !== action.id) return todo
                else return {...todo, deadline: action.newdeadline}
            })
        }

        default:
            return state
    }
}

export default reducerFn