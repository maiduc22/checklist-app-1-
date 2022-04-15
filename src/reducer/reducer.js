import { v4 as uuid } from 'uuid';

let todos = [
    {id:uuid() ,title: 'uong nuoc', isDone: false, level: 'Low', deadline: "4/16/2022", timeLeft: 1}
]
const reducerFn = (state = todos, action) => {
    switch (action.type){
        case "Add":
            return [...state, 
                {
                    id: action.id, 
                    title: action.title,
                    isDone: action.isDone,
                    level: action.level,
                    deadline: action.deadline,
                    timeLeft: action.timeLeft
                }]
        case "Finish":{
            return state.map( todo => {
                if(todo.id !== action.payload) return todo
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
            return state.filter(todo => todo.id !== action.payload)
        }
        default:
            return state
    }
}

export default reducerFn