
const addtask = (task) => {
    return{
        type: "Add",
        id: task.id,
        title: task.title,
        isDone: task.isDone,
        level: task.level,
        deadline: task.deadline,
    }
}

const finishTask = (id) => {
    return{
        type: "Finish",
        id
    }
}

const deleteTask = (id) => {
    return{
        type: 'Delete',
        id
    }
}

const clearAll = () => {
    return {
        type: 'Clear'
    }
}

const editTask = (id) =>{
    return{
        type: 'Edit',
        id
    }
}
export default {
    addtask, finishTask, deleteTask, clearAll, editTask
}
