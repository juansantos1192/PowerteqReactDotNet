import React from 'react'

const List = ({ Tasks }) => {

    console.log('users length:::', Tasks.length)
    if (Tasks.length === 0) return null

    const taskRow = (task, index) => {

        return (
            <tr key={index}>
                <td>{task.Title}</td>
                <td>{task.Description}</td>
                <td>{Task.Date}</td>
            </tr>
        )
    }

    const taskTable = Tasks.map((task, index) => taskRow(task, index))

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {taskTable}
                </tbody>
            </table>
       </div>
    )
}


export default List