
const addtask = (task) => {
    return{
        type: "Add",
        payload: task
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

const editTaskTitle = (id, newtitle) =>{
    return{
        type: "Edit_Title",
        payload: {id, newtitle}
    }
}
const editTaskLevel = (id) =>{
    return{
        type: 'Edit_Level',
        payload: id
    }
}
const editTaskDeadline = (id, newDeadline) =>{
    return{
        type: 'Edit_Deadline',
        payload: {id, newDeadline}
    }
}

const filterTitle = (seacrh) => {
    return{
        type: 'Filter_By_Title',
        seacrh
    }
}

const filterLevel = (level) => {
    return{
        type: 'Filter_By_Title',
        level
    }
}

const filterStatus = (status) => {
    return{
        type: 'Filter_By_Title',
        status
    }
}

const dragItem = (item) => {
    return{
        type: 'Drag',
        item
    }
}

export default {
    addtask, finishTask, deleteTask, clearAll, editTaskTitle, filterLevel, filterStatus, filterTitle,
    editTaskLevel, editTaskDeadline, dragItem
}
