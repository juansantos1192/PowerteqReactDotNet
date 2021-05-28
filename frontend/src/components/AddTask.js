import React from 'react'

//may need edit task
const AddTask = ({ onChangeForm, addTask }) => {
    return (
        <div>
            <h2> Add Task</h2>
            <form>
                <div>
                    <label htmlFor="inputTask" >Task Here </label>
                    <input type="text" onChange={(e) => onChangeForm(e)} name="task" id="task" placeholder="Task here" />
                </div>

                <div>
                    <label htmlFor="inputDescription" >Description Here </label>
                    <input type="text" onChange={(e) => onChangeForm(e)} name="description" id="description" placeholder="Description here" />
                </div>

                <div>
                    <label htmlFor="inputDate" >Date Here </label>
                    <input type="text" onChange={(e) => onChangeForm(e)} name="date" id="date" placeholder="Date here" />
                </div>



                <button type="button" onClick={(e) => addTask()} className="btn btn-danger">Add</button>
            </form>
        </div>



    )
}

export default AddTask