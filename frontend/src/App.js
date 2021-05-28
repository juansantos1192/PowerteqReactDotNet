import React, { Component } from 'react';
import Header from 'components/Header'
import AddTask from 'components/AddTask'
import './App.css';
import List from 'component/List'

//may need deleteTask editTask
class App extends Component {

    state = {
        task: {},
        Tasks: [],
        TaskAmount: 0
    }

    addTask = (e) => {
        addTask(this.state.task)
            .then(response => {
                this.setState({ TaskAmount: this.state.TaskAmount + 1 })
            });
    }

    onChangeForm = (e) => {
        let task = this.state.task
        if (e.target.name === 'task') {
            task.task = e.target.value;
        } else if (e.target.name === 'description') {
            task.description = e.target.value;
        } else if (e.target.name === 'date') {
            task.date = e.target.value;
        }
        this.setState({ task });
    }

    getAllTasks = () => {
        getAllTasks()
            .then(Tasks => {
                this.setState({ Tasks: Tasks, TaskAmount: Tasks.length })
            });
    }


    render() {
        return (
            <div className="App">
                <Header />
                <div>
                <AddTask onChangeForm={this.onChangeForm} addTask={this.addTask} />
                    </div>
                    <div> 
                    <List Tasks={this.state.Tasks}/>
                    </div>

            </div>
        );

    }
}

export default App;
