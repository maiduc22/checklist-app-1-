const initialState = {
    todos: [], 
}

const reducerFn = (state = initialState, action) => {
    switch (action.type){
        case "Add":
            const temp = [...state.todos, {
                id: action.id, 
                title: action.title,
                isDone: false,
                level: action.level,
                deadline: action.deadline,
            }]
            return{
                ...state, 
                todos: temp
            }
        case "Finish":{
            const temp = state.todos.map(todo => {
                if (todo.id !== action.id) return todo
                else return {...todo, isDone: !todo.isDone}
            })
            return {
                ...state,
                todos: temp
            }
        }
        case "Delete":{
            const temp = state.todos.filter(todo => todo.id !== action.id)
            return {
                ...state,
                todos: temp
            }
        }
        case "Clear":{
            return {
                ...state,
                todos: []
            }
        }
        case "Edit_Title":{
            const temp =  state.todos.map(todo => {
                if(todo.id !== action.id) return todo
                else {
                    // console.log(action.title)
                    return {...todo, title: action.newtitle}
                }
            })
            return {
                ...state,
                todos: temp
            }
        }
        case "Edit_Level":{
            const temp =  state.todos.map(todo => {
                if(todo.id !== action.id) return todo
                else {
                    // console.log(action.title)
                    return {...todo, level: action.newlevel}
                }
            })
            return {
                ...state,
                todos: temp
            }
        }
        case "Edit_Deadline":{
            const temp =  state.todos.map(todo => {
                if(todo.id !== action.id) return todo
                else {
                    // console.log(action.title)
                    return {...todo, deadline: action.newdeadline}
                }
            })
            return {
                ...state,
                todos: temp
            }
        }

        default:
            return state
    }
}

export default reducerFn