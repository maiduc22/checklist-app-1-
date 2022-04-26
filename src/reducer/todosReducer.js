const initialState = {
    todos: [],
    
    filter: {
        filterTodos: [],
    }
}

const todosReducer = (state = initialState, action) => {
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
            console.log(temp)
            return {
                ...state,
                todos: temp
            }
        }
        case "Clear":{
            return {
                todos: [],
                filter: {
                    filterTodos: [],
                }
            }
        }
        case "Edit_Title":{
            const temp =  state.todos.map(todo => {
                if(todo.id !== action.payload.id) return todo
                else {
                    // console.log(action.title)
                    return {...todo, title: action.payload.newtitle}
                }
            })
            return {
                ...state,
                todos: temp
            }
        }
        case "Edit_Level":{
            const temp =  state.todos.map(todo => {
                if(todo.id !== action.payload.id) return todo
                else {
                    // console.log(action.title)
                    return {...todo, level: action.payload.newlevel}
                }
            })
            return {
                ...state,
                todos: temp
            }
        }
        case "Edit_Deadline":{
            const temp =  state.todos.map(todo => {
                if(todo.id !== action.payload.id) return todo
                else {
                    // console.log(action.title)
                    return {...todo, deadline: action.payload.newdeadline}
                }
            })
            return {
                ...state,
                todos: temp
            }
        }
        case 'Filter_By_Title':{
            const temp = state.todos.filter((todo) => {
                if (action.search === '') return todo
                else return todo.title.includes(action.search)
            })
            const new_filter = {...state.filter, search: action.search, filterTodos: temp}
            return {
                ...state,
                filter: new_filter
            }
        }
        case 'Filter_By_Level':{
            if (action.payload === '') {
                const temp = {...state.filter, filterTodos: state.todos}
                return {
                    ...state,
                    filter: temp
                }
            }
            else {
                const temp = state.todos.filter((todo) => {
                    if (todo.level === action.payload) return todo
                })
                const new_filter = {...state.filter, filterTodos: temp}
                return {
                    ...state,
                    filter: new_filter
                }
            }
        }
        case 'Filter_By_Status':{
            console.log(typeof(action.payload))
            if (action.payload === '') {
                const temp = {...state.filter, filterTodos: state.todos}
                return {
                    ...state,
                    filter: temp
                }
            }
            else {
                const temp = state.todos.filter((todo) => {
                    if (todo.isDone == action.payload) return todo
                })
                const new_filter = {...state.filter, filterTodos: temp}
                return {
                    ...state,
                    filter: new_filter
                }
            }
        }
        case 'Drag':{
            const temp = [...state.todos]
            let [drag] = temp.splice(action.item.source.index, 1)
            temp.splice(action.item.destination.index, 0, drag)
            // const new_filter = {...state.filter, filterTodos: temp}
            return{
                ...state,
                todos: temp
            }            
        }
        default:
            return state
    }
}

export default todosReducer