
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

const finishTask = () => {
    return{
        type: "Finish",
        
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

const editTaskTitle = (id, newtitle) =>{
    return{
        type: "Edit_Title",
        id,
        newtitle
    }
}
const editTaskLevel = (id) =>{
    return{
        type: 'Edit_Level',
        id,
    }
}
const editTaskDeadline = (id, newDeadline) =>{
    return{
        type: 'Edit_Deadline',
        id,
        newDeadline
    }
}


export default {
    addtask, finishTask, deleteTask, clearAll, editTaskTitle, editTaskLevel, editTaskDeadline
}
