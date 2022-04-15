
const addtask = (task) => {
    return{
        type: "Add",
        id: task.id,
        title: task.title,
        isDone: task.isDone,
        level: task.level,
        deadline: task.deadline,
        timeLeft: task.timeLeft
    }
}

const finishTask = (id) => {
    return{
        type: "Finish",
        payload: id
    }
}

const deleteTask = () => {
    return{
        type: 'Delete',
        payload: id
    }
}

export default {
    addtask, finishTask, deleteTask
}
